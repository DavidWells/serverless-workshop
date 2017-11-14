/* Cron function */
module.exports.cron = (event, context, callback) => {
  const time = new Date()
  console.log(`Function "${context.functionName}" ran at ${time}`)
}
