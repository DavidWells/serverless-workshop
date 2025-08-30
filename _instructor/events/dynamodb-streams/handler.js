/* Include the AWS sdk.
 * No need to add to package.json. It's included in lambda env
*/
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, ScanCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
// Connect to DynamoDB
const client = new DynamoDBClient({});
const dynamoDb = DynamoDBDocumentClient.from(client);

// Save item in DynamoDB table
export const create = async (event, context) => {
  const timestamp = new Date().getTime()
  const body = JSON.parse(event.body)

  if (!body || !body.email) {
    return {
      statusCode: 401,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        error: 'no body found or email found'
      })
    }
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
    return response
  } catch (error) {
    // handle potential errors
    console.error(error)
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the dynamo item.',
    }
  }
}

/* Scan a dynamoDB table and return items */
export const scan = async (event, context) => {
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
    return response
  } catch (error) {
    // handle potential errors
    console.error(error)
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t fetch the todos.',
    }
  }
}


export const delete = async (event, context) => {
  const body = JSON.parse(event.body)

  if (!body || !body.id) {
    return {
      statusCode: 401,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        error: 'no body found or id found'
      })
    }
  }
  // WORKSHOP_START
  /* Step 1. In this_file, implement the delete item function here via `dynamoDb.delete` method.

      You can view the dynamoDB docs here: http://amzn.to/2ilqYlM or see the completed code in `lessons-code-complete` directory
  */
  // WORKSHOP_END

  // FINAL_START
  const params = {
    TableName: process.env.MY_TABLE,
    Key: {
      id: body.id,
    },
  }

  // delete the todo from the database
  try {
    await dynamoDb.send(new DeleteCommand(params));
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `user ${body.id} deleted`
      }),
    }
    return response
  } catch (error) {
    // handle potential errors
    console.error(error)
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t remove the todo item.',
    }
  }
  // FINAL_END
}

// WORKSHOP_START
/* Step 8. In this_file, implement the `dynamoStreamHandler` function.

    You will need to iterate over an array of `event.Records` to process the data.

    See the completed code if in `lessons-code-complete` directory
*/
// WORKSHOP_END
/* Function to handle items on the dynamoDB stream */
export const dynamoStreamHandler = (event, context) => {
  // FINAL_START
  event.Records.forEach((record) => {
    console.log(record.eventID)
    console.log(record.eventName)
    console.log('DynamoDB Record: %j', record.dynamodb)
    if (record.eventName === 'INSERT') {
      console.log('INSERT EVENT. DO WELCOME STUFF')
    }
    if (record.eventName === 'REMOVE') {
      console.log('REMOVAL EVENT. DO REMOVAL STUFF')
    }
  })
  return `Successfully processed ${event.Records.length} records.`;
  // FINAL_END
}
