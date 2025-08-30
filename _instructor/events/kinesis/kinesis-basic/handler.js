// WORKSHOP_START
/*
  Step 6. the `processEvents` in this_file will handle the batch processing of kinesis events
*/
// WORKSHOP_END
export const processEvents = (event, context) => {
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
  return `Successfully processed ${event.Records.length} records.`;
}
