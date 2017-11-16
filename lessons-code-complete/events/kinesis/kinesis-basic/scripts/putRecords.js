const AWS = require('aws-sdk')
const argv = require('yargs').argv

const streamName = argv.name
const numberOfEvents = argv.count || 20
const AWS_REGION =  argv.region || 'us-east-1';

if (!streamName) {
  console.log('no streamName. Specify --name param')
  return false
}

function putRecords() {
  const kinesis = new AWS.Kinesis({region: AWS_REGION})
  const params = {
    Records: Array.from(Array(parseInt(numberOfEvents))).map((_, i) => {
      const n = (Math.random() * 100).toFixed(2) * (Math.random() > 0.5 ? 1 : -1);
      console.log("amount: ", n);
      const data = {
        ID: i,
        USERNAME: "admin" + i,
        AMOUNT: n
      }
      return {
        Data: JSON.stringify(data),
        PartitionKey: 'MyPartitionKey',
      };
    }),
    StreamName: streamName,
  };
  return kinesis.putRecords(params).promise();
}

putRecords().then((res) => {
  console.log("Done", res);
}).catch((err) => {
  console.error("Error", err);
});
