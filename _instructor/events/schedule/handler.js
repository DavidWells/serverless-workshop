// WORKSHOP_START
/* Step 2. In this_file, use the `cronFunction` function to do something interesting */
// WORKSHOP_END
/* Cron function */
module.exports.cronFunction = (event, context, callback) => {
  // FINAL_START
  const time = new Date()
  console.log(`Function "${context.functionName}" ran at ${time}`)
  // FINAL_END
}
