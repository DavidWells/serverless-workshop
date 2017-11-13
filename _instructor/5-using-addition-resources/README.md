# Defining additional resources

This lesson will cover adding additional resources to your serverless service.

Typically a micro service will a datastore with it.

This example walks through adding a dynamoDB table to your service.

## Steps

1. Add the dynamoDB cloudformation to the `resources` block of the `serverless.yml` file.
2. Add the IAM role the lambda function needs in order to access the database.
3. Add the database table name to the service's `environment` variables. The `aws-sdk` will need to know the table name in order to access the table

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
```
