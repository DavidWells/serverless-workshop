# Defining additional resources

This lesson we will be adding a delete function to remove users from the database and trigger another function from the dynamo deletion event

## Steps

1. Create a `delete` function in `serverless.yml` and trigger it from an `http` post event
2. Implement the `delete` function in `handler.js` using the `dynamoDB` delete method
3. In `iamRoleStatements` of `serverless.yml` add the `dynamodb:DeleteItem` key to the IAM role statement. This will allow for the delete function to remove items from the table.
4. `sls deploy` and test your new function

  POST to your endpoint with `{ "id": "id-here"}`

## DynamoDB cloudformation

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
      # add stream to dynamo table
      StreamSpecification:
        StreamViewType: NEW_AND_OLD_IMAGES
```
