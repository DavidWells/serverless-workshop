# Defining additional resources

This lesson we will be adding a delete function to remove users from the database and trigger another function from the dynamo `REMOVE` event

- [Lesson Steps](#lesson-steps)
- [DynamoDB cloudformation with stream](#dynamodb-cloudformation-with-stream)

## Lesson Steps

1. In `serverless.yml`, Add a `delete` function triggered by an http POST event

2. In `handler.js`, implement the dynamoDB deletion here via `dynamoDb.delete` method.

      You can view the dynamoDB docs here: http://amzn.to/2ilqYlM or See the completed code if in `lessons-code-complete` directory

3. In `serverless.yml`, the IAM role must be updated to include `dynamodb:DeleteItem` permission

4. **Deploy the service.**

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

    The deploy command should return a list of live URL endpoints for you to test out.

    ```bash
    https://xyz.execute-api.us-east-1.amazonaws.com/dev/delete
    ```

5. **Trigger the live delete endpoint**

    To get information about the service run
    ```bash
    sls info
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/delete
    ```

    Take your live endpoint and `curl` it or use [PostMan](https://www.getpostman.com) to post to it.

    Send this json in the body of the request
    ```json
    {
      "id": "id-here"
    }
    ```

    `curl` example:
    ```bash
    curl -vvv -X POST -d '{"id": "id-here"}' -H "Content-Type: application/json" https://xxx.execute-api.us-west-2.amazonaws.com/dev/delete
    ```

    You should receive a response with the new item. (or an error if dynamo fails)

6. add a stream to the dynamoDB table by setting the `StreamSpecification` property on the `Properties` of the CloudFormation declaration of the table. Set `StreamViewType: NEW_AND_OLD_IMAGES`

7. In `serverless.yml`, You will need the `GetRecords`, `GetShardIterator`, `DescribeStream`, `ListStreams` permissions for Dynamo Stream access.

8. In `handler.js`, implement the `dynamoStreamHandler` function.

    You will need to iterate over an array of `event.Records` to process the data.

    See the completed code if in `lessons-code-complete` directory

8. Add a `handleStream` function triggered by a dynamo Stream http://bit.ly/2mhkJne in `serverless.yml`

9. **Deploy the service again.**

    Now you have configured you configured your stream and set the correct permissions for your functions to listen to dynamo changes, lets redeploy

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

10. **Trigger the live delete endpoint** again

    ```bash
    sls info

    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/delete
    ```

    Trigged the endpoint again and verify that the item was deleted from your database.

    Run the logs against the
    ```
    sls logs -f handleStream -t
    ```

    You should see events triggering your lambda functions

## DynamoDB cloudformation with stream

```yml
Resources:
  myDynamoTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: 'my-table-name'
      AttributeDefinitions:
        - AttributeName: url
          AttributeType: S
      KeySchema:
        - AttributeName: url
          KeyType: HASH
      ProvisionedThroughput:
        ReadCapacityUnits: 1
        WriteCapacityUnits: 1
      # add stream to dynamo table
      StreamSpecification:
        StreamViewType: NEW_AND_OLD_IMAGES
```

For additional cloudformation information check out. https://acloud.guru/learn/aws-cloudformation and https://acloud.guru/learn/aws-advanced-cloudformation

