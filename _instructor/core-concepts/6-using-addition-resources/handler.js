/* Include the AWS sdk.
 * No need to add to package.json. It's included in lambda env
*/
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
// Connect to DynamoDB
const client = new DynamoDBClient({});
const dynamoDb = DynamoDBDocumentClient.from(client);

// Save item in DynamoDB table
export const create = async (event, context, callback) => {
  const timestamp = new Date().getTime()
  const body = JSON.parse(event.body)

  if (!body || !body.email) {
    return callback(null, {
      statusCode: 401,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        error: 'no body found or email found'
      })
    })
  }

  const params = {
    TableName: process.env.MY_TABLE,
    Item: {
      id: Math.random().toString(36).slice(2),
      timestamp: timestamp,
      email: body.email
    },
  }

  // write the todo to the database
  try {
    await dynamoDb.send(new PutCommand(params));
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    }
    return callback(null, response)
  } catch (error) {
    // handle potential errors
    console.error(error)
    return callback(null, {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the dynamo item.',
    })
  }
}

/* Scan a dynamoDB table and return items */
export const scan = async (event, context, callback) => {
  const params = {
    TableName: process.env.MY_TABLE,
  }
  // fetch all todos from the database
  try {
    const result = await dynamoDb.send(new ScanCommand(params));
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    }
    return callback(null, response)
  } catch (error) {
    // handle potential errors
    console.error(error)
    return callback(null, {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t fetch the todos.',
    })
  }
}
