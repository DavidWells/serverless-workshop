# Using DynamoDB streams

This lesson we will be adding a delete function to remove users from the database and trigger another function from the dynamo `REMOVE` event

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [DynamoDB Stream CloudFormation](#dynamodb-stream-cloudformation)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. In `handler.js`, implement the delete item function here via `dynamoDb.delete` method.

      You can view the dynamoDB docs here: http://amzn.to/2ilqYlM or see the completed code in `lessons-code-complete` directory

2. In `serverless.yml`, add the `delete` function exported from `handler.js` and attach it to an http POST event.

3. In `serverless.yml`, the `iamRoleStatements` must be updated to include `dynamodb:DeleteItem` permission to allow for the `delete` function to remove items from the dynamo table.

4. **Deploy the service.**

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

    After deploying. Add a user to the database with the create endpoint.

    POST to `https://xyz.execute-api.us-east-1.amazonaws.com/dev/create`

    With the body:

    ```json
    {
      "email": "test@test.com"
    }
    ```

    This will return the auto generated user ID. We will use this id in the deletion step below.

    ```json
    {
      "id": "4cgl4td0mufwl0wiqrepuba9k9",
      "timestamp": 1520547428623,
      "email": "test@test.com"
    }
    ```

5. **Trigger the live delete endpoint**

    To get live endpoints & additional information about the service run

    ```bash
    sls info
    ```

    `POST - https://xyz123.execute-api.us-east-1.amazonaws.com/dev/delete`

    Take your live endpoint and `curl` it or use [PostMan](https://www.getpostman.com) to run the function.

    Send this json in the body of the request

    ```json
    {
      "id": "4cgl4td0mufwl0wiqrepuba9k9"
    }
    ```

    `curl` example:

    ```bash
    curl -vvv -X POST -d '{"id": "4cgl4td0mufwl0wiqrepuba9k9"}' -H "Content-Type: application/json" https://xyz.execute-api.us-east-1.amazonaws.com/dev/delete
    ```

    You should receive a response with the new item. (or an error if dynamo fails)

6. Now, add a stream to the dynamoDB table by setting the `StreamSpecification` property on the `Properties` of the CloudFormation declaration of the `myDynamoTable` table. Set `StreamViewType: NEW_AND_OLD_IMAGES`. [CloudFormation dynamob docs](http://amzn.to/2txNq3a)

7. In `serverless.yml`, We need to update the dynamodb IAM permissions `GetRecords`, `GetShardIterator`, `DescribeStream`, `ListStreams` permissions for functions to access the Dynamo Stream.

8. In `handler.js`, implement the `dynamoStreamHandler` function.

    You will need to iterate over an array of `event.Records` to process the data.

    See the completed code if in `lessons-code-complete` directory

8. In `serverless.yml`, add a `handleStream` function triggered by a dynamo Stream. [See stream docs](http://bit.ly/2mhkJne)

9. **Deploy the service again.**

    Now you have configured you configured your stream and set the correct permissions for your functions to listen to dynamo changes, it is time to redeploy

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

10. **Trigger the live delete endpoint** again

    ```bash
    # get endpoints if you need
    sls info
    ```

    `POST - https://xyz123.execute-api.us-east-1.amazonaws.com/dev/delete`

    Take your live `delete` endpoint & `curl` it or use [PostMan](https://www.getpostman.com) to run the function.

    Send this json in the body of the request

    ```json
    {
      "id": "your-id-here"
    }
    ```

    `curl` example:

    ```bash
    curl -vvv -X POST -d '{"id": "your-id-here"}' -H "Content-Type: application/json" https://xyz.execute-api.us-east-1.amazonaws.com/dev/delete
    ```

    Trigged the endpoint again and verify that the item was deleted from your database.

    Run the logs against the
    ```
    sls logs -f handleStream -t
    ```

    You should see events triggering your lambda functions
<!-- AUTO-GENERATED-CONTENT:END -->

## DynamoDB Stream CloudFormation

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

For additional CloudFormation information check out. https://acloud.guru/learn/aws-cloudformation and https://acloud.guru/learn/aws-advanced-cloudformation

<!-- Step 4. **Deploy the service.**

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

    After deploying. Add a user to the database with the create endpoint.

    POST to `https://xyz.execute-api.us-east-1.amazonaws.com/dev/create`

    With the body:

    ```json
    {
      "email": "test@test.com"
    }
    ```

    This will return the auto generated user ID. We will use this id in the deletion step below.

    ```json
    {
      "id": "4cgl4td0mufwl0wiqrepuba9k9",
      "timestamp": 1520547428623,
      "email": "test@test.com"
    }
    ```

-->
<!-- Step 5. **Trigger the live delete endpoint**

    To get live endpoints & additional information about the service run

    ```bash
    sls info
    ```

    `POST - https://xyz123.execute-api.us-east-1.amazonaws.com/dev/delete`

    Take your live endpoint and `curl` it or use [PostMan](https://www.getpostman.com) to run the function.

    Send this json in the body of the request

    ```json
    {
      "id": "4cgl4td0mufwl0wiqrepuba9k9"
    }
    ```

    `curl` example:

    ```bash
    curl -vvv -X POST -d '{"id": "4cgl4td0mufwl0wiqrepuba9k9"}' -H "Content-Type: application/json" https://xyz.execute-api.us-east-1.amazonaws.com/dev/delete
    ```

    You should receive a response with the new item. (or an error if dynamo fails)
-->
<!-- Step 9. **Deploy the service again.**

    Now you have configured you configured your stream and set the correct permissions for your functions to listen to dynamo changes, it is time to redeploy

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

-->
<!-- Step 10. **Trigger the live delete endpoint** again

    ```bash
    # get endpoints if you need
    sls info
    ```

    `POST - https://xyz123.execute-api.us-east-1.amazonaws.com/dev/delete`

    Take your live `delete` endpoint & `curl` it or use [PostMan](https://www.getpostman.com) to run the function.

    Send this json in the body of the request

    ```json
    {
      "id": "your-id-here"
    }
    ```

    `curl` example:

    ```bash
    curl -vvv -X POST -d '{"id": "your-id-here"}' -H "Content-Type: application/json" https://xyz.execute-api.us-east-1.amazonaws.com/dev/delete
    ```

    Trigged the endpoint again and verify that the item was deleted from your database.

    Run the logs against the
    ```
    sls logs -f handleStream -t
    ```

    You should see events triggering your lambda functions
-->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/dynamodb-streams)
<!-- AUTO-GENERATED-CONTENT:END -->

## Additional Resources

- [Modeling Relational Data in DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-modeling-nosql-B.html)
