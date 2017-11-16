// WORKSHOP_START
/* Step 2. In this_file, Set `headers` in the function response for CORS to work.  http://bit.ly/2mkgV4P */
// WORKSHOP_END
module.exports.functionWithCors = (event, context, callback) => {
  const response = {
    statusCode: 200,
    // FINAL_START
    headers: {
      /* Required for CORS support to work */
      "Access-Control-Allow-Origin" : "*",
      /* Required for cookies, authorization headers with HTTPS */
      "Access-Control-Allow-Credentials" : true
    },
    // FINAL_END
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    }),
  }
  return callback(null, response)
}
