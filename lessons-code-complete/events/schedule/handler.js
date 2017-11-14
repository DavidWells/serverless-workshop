/* Cron function */
module.exports.cronFunction = (event, context, callback) => {
  const time = new Date()
  console.log(`Function "${context.functionName}" ran at ${time}`)
}
