// WORKSHOP_START
/* Step 2. In this_file, set `headers` key of the function response object.

    Set the `"Access-Control-Allow-Origin"` & `"Access-Control-Allow-Credentials"` headers.

    For additional information, see the cors docs http://bit.ly/2FlFSWB
*/
// WORKSHOP_END
module.exports.functionWithCors = (event, context, callback) => {
  const response = {
    statusCode: 200,
    // FINAL_START
    headers: {
      /* Required for CORS support to work */
      "Access-Control-Allow-Origin": "*",
      /* Required for cookies, authorization headers with HTTPS */
      "Access-Control-Allow-Credentials": true
    },
    // FINAL_END
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    }),
  }
  return callback(null, response)
}
