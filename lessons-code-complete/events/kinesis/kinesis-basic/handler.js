module.exports.processEvents = (event, context, callback) => {
  // Process kinesis event
  if (event.Records) {
    event.Records.forEach((record) => {
      const payload = new Buffer(record.kinesis.data, 'base64').toString('ascii')
      const data = JSON.parse(payload)
      if (!data.AMOUNT) {
        return false
      }

      if (data.AMOUNT > 0) {
        console.log('POSITIVE decoded record:', payload)
        // do stuff with positive AMOUNT
        return false
      }

      // do stuff with negative AMOUNT
      console.log('NEGATIVE decoded record:', payload)
    })
  }
  return callback(null, `Successfully processed ${event.Records.length} records.`);
}
