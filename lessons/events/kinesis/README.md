# Using Kinesis as an Event Source

- [About Kinesis](#about-kinesis)
- [Example Kinesis batch event payload](#example-kinesis-batch-event-payload)
- [Other Examples](#other-examples)
- [Shoutouts](#shoutouts)

This example walks through setting up a kinesis stream and connecting a function to batch consume events placed onto the stream.

Go to [kinesis basic](./kinesis-basic) to start.

## About Kinesis

- Lambda function's can receive up to 100 events per batch in the `event`’s payload.
- Kinesis streams can be partioned into `shards`
    - Each shard can support a maximum read rate of 2 MBps (max 5 transactions)
    - Each shard has a maximum total data write rate of 1 MBps (max 1,000 records)

<img src="https://user-images.githubusercontent.com/532272/32869755-7d651856-ca2d-11e7-9373-6da55973a9ca.png" width="800" />

## Example Kinesis batch event payload

```json
{
  "Records": [
    {
      "kinesis": {
        "kinesisSchemaVersion": "1.0",
        "partitionKey": "undefined",
        "sequenceNumber": "49568749374218235080373793662003016116473266703358230578",
        "data": "eyJzY2hlbWEiOiJjb20ubm9yZHN0cm9tL3JldGFpb[...]Y3NDZvciBNZW4ifX0=",
        "approximateArrivalTimestamp": 1484245766.362
      },
      "eventSource": "aws:kinesis",
      "eventVersion": "1.0",
      "eventID": "shardId-000000000003:49568749374218235080373793662003016116473266703358230578",
      "eventName": "aws:kinesis:record",
      "invokeIdentityArn": "arn:aws:iam::515126931066:role/devProductCatalogReaderWriter",
      "awsRegion": "us-west-2",
      "eventSourceARN": "arn:aws:kinesis:us-west-2:515126931066:stream/devRetailStream"
    },
    {
      "kinesis": {
        "kinesisSchemaVersion": "1.0",
        "partitionKey": "undefined",
        "sequenceNumber": "49568749374218235080373793662021150003767486140978823218",
        "data": "eyJzY2hlbWEiOiJjb20ubm9yZHN0cm9tL3JldGFpb[...]I3MyRlcnMgZm9yIE1lbiJ9fQ==",
        "approximateArrivalTimestamp": 1484245766.739
      },
      "eventSource": "aws:kinesis",
      "eventVersion": "1.0",
      "eventID": "shardId-000000000003:49568749374218235080373793662021150003767486140978823218",
      "eventName": "aws:kinesis:record",
      "invokeIdentityArn": "arn:aws:iam::515126931066:role/devProductCatalogReaderWriter",
      "awsRegion": "us-west-2",
      "eventSourceARN": "arn:aws:kinesis:us-west-2:515126931066:stream/devRetailStream"
    }
  ]
}
```

## Other Examples

- [Amazon Kinesis Streams fan-out via Kinesis Analytics](https://github.com/alexcasalboni/kinesis-streams-fan-out-kinesis-analytics)
- [hello-retail-workshop](https://github.com/Nordstrom/hello-retail-workshop)
- [Serverless analytics](https://github.com/sbstjn/serverless-analytics)

## Shoutouts

Shoutout to [Alex](https://github.com/alexcasalboni/) for [kinesis-streams-fan-out-kinesis-analytics](https://github.com/alexcasalboni/kinesis-streams-fan-out-kinesis-analytics/) repo 🔥
