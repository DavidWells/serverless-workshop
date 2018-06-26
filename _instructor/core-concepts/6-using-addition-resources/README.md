# Defining additional resources

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Background](#background)
- [Lesson Steps](#lesson-steps)
- [DynamoDB CloudFormation](#dynamodb-cloudformation)
- [DynamoDB Resources](#dynamodb-resources)
- [CloudFormation Resources](#cloudformation-resources)
- [IAM Roles](#iam-roles)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Background

When building serverless services, it's pretty common to require additional resources to be setup outside of simple functions & endpoints.

Resources like a databases, additional s3 buckets, a kinesis stream, or an SQS queue might be required for real world use cases.

There are two things we need to do to add addition resources.

1. Define the resources needed in the `serverless.yml` file's `resources` block
2. Add any additional IAM permissions the functions will need to interact with those resources.

This lesson will cover adding additional resources to your serverless service.

We will walk through adding a dynamoDB table to your service.

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. Add the DynamoDB CloudFormation in `readme.md` to the `resources` block of `serverless.yml`

2. In `serverless.yml`, add a new IAM role the lambda function needs in order to access the newly created dynamoDB table.

3. In `serverless.yml`, add the database table name to the service's `environment` variables. The `aws-sdk` will need to know the table name in order to access the table

4. **Deploy the service**

    Run the following command in your CLI

    ```bash
    sls deploy
    ```

5. **Trigger the live create endpoint**

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

    `curl` example:

    ```bash
    curl -vvv -X POST -d '{"email": "lololol@lolol.com"}' -H "Content-Type: application/json" https://xxx.execute-api.us-west-2.amazonaws.com/dev/create
    ```

    You should receive a response with the new item. (or an error if dynamo fails)
<!-- AUTO-GENERATED-CONTENT:END -->

## DynamoDB CloudFormation

CloudFormation can be tricky at first. Below is the cloud formation template for a new dynamoDB table.

```yml
Resources:
  myDynamoTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: 'my-table-name'
      AttributeDefinitions:
        - AttributeName: id
          AttributeType: S
      KeySchema:
        - AttributeName: id
          KeyType: HASH
      ProvisionedThroughput:
        ReadCapacityUnits: 1
        WriteCapacityUnits: 1
```

IAM policy for accessing DynamoDB

```yml
iamRoleStatements:
  - Effect: Allow
    Action:
      - dynamodb:PutItem
      - dynamodb:Scan
    Resource: { Fn::GetAtt: [ myDynamoTable, Arn ] }
```    

## DynamoDB Resources

DynamoDB is a noSQL database thats crazy fast.

It can also trigger lambda functions. 🔥

**Resources**:

- [Intro to DynamoDB](https://blog.insightdatascience.com/getting-started-with-aws-serverless-architecture-tutorial-on-kinesis-and-dynamodb-using-twitter-38a1352ca16d#6aea)
- [22 hour video course on all things Dynamo](https://acloud.guru/learn/aws-dynamodb)

**Key concepts:**

- `Partition Key`: Like all key-value stores, a partition key is a unique identifier for an entry
- `Sort key`: or hash key. This is helpful for adding additional sorting to table.
- `Provisioned Throughput`: Pricing of DynamoDB is done based on how many reads/writes you provision.

<img width="800" src="https://user-images.githubusercontent.com/532272/32819548-ad9aa9d2-c97e-11e7-8161-b261cd1f8696.png"/>


## CloudFormation Resources

For additional CloudFormation information check out:

- [Reference of all CloudFormation Types](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)
- [AWS CloudFormation code completion for Atom editor](https://atom.io/packages/atom-cform)
- [CloudFormation video tutorials](https://acloud.guru/learn/aws-cloudformation)
- [Advanced CloudFormation video tutorials](https://acloud.guru/learn/aws-advanced-cloudformation)

## IAM Roles

AWS IAM is one of the trickiest bits of working with lambda. [Read this introductory post](https://serverless.com/blog/abcs-of-iam-permissions/) to get the hang out IAM.

Additionally you can dive deeper by checking out this video: [Become an AWS IAM Policy Ninja in 60 Minutes or Less](https://www.youtube.com/watch?v=y7-fAT3z8Lo)

<!-- Step 4. **Deploy the service**

    Run the following command in your CLI

    ```bash
    sls deploy
    ```
-->

<!-- Step 5. **Trigger the live create endpoint**

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

    `curl` example:

    ```bash
    curl -vvv -X POST -d '{"email": "lololol@lolol.com"}' -H "Content-Type: application/json" https://xxx.execute-api.us-west-2.amazonaws.com/dev/create
    ```

    You should receive a response with the new item. (or an error if dynamo fails)
-->


<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/6-using-addition-resources)
<!-- AUTO-GENERATED-CONTENT:END -->
