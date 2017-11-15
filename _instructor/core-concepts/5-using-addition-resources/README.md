# Defining additional resources

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Background](#background)
- [Lesson Steps](#lesson-steps)
- [DynamoDB Cloud formation](#dynamodb-cloud-formation)
<!-- AUTO-GENERATED-CONTENT:END -->

## Background

Very often when building serverless micro services they require additional resources to be setup outside of just functions and endpoints.

Resources like a database, an additional s3 bucket, a kinesis stream, or an SQS queue.

There are two things we need to do to add addition resources.

1. Define the resources needed in the `serverless.yml` `resouces` block
2. Add any additional permissions the functions in the service will need to interact with those resources.

This lesson will cover adding additional resources to your serverless service. We will walk through adding a dynamoDB table to your service.

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. Add the dynamoDB cloudformation to the `resources` block of `serverless.yml`

2. In `serverless.yml`, add a new IAM role the lambda function needs in order to access the newly created dynamoDB table.

3. In `serverless.yml`, add the database table name to the service's `environment` variables. The `aws-sdk` will need to know the table name in order to access the table

4. **Deploy the service **

    Run the following command in your CLI
    ```bash
    sls deploy
    ```

5. **Trigger the live create endpoint **

    To get information about the service run
    ```bash
    sls info
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/create
    ```

    Take your live endpoint and `curl` it or use [PostMan](https://www.getpostman.com) to post to it.

    Send this json in the body of the request
    ```json
    {
      "email": "lololol@lolol.com"
    }
    ```

    You should receive a response with the new item. (or an error if dynamo fails)
<!-- AUTO-GENERATED-CONTENT:END -->

## DynamoDB Cloud formation

Cloudformation can be tricky at first. Below is the cloud formation template for a new dynamoDB table.

For additional cloudformation information check out. https://acloud.guru/learn/aws-cloudformation and https://acloud.guru/learn/aws-advanced-cloudformation

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
```

<!-- Step 4. **Deploy the service **

    Run the following command in your CLI
    ```bash
    sls deploy
    ```
-->

<!-- Step 5. **Trigger the live create endpoint **

    To get information about the service run
    ```bash
    sls info
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/create
    ```

    Take your live endpoint and `curl` it or use [PostMan](https://www.getpostman.com) to post to it.

    Send this json in the body of the request
    ```json
    {
      "email": "lololol@lolol.com"
    }
    ```

    You should receive a response with the new item. (or an error if dynamo fails)
-->
