
module.exports.functionWithCors = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      // WORKSHOP_START
      // Set headers for cors to work. docs link http://bit.ly/2mkgV4P
      // WORKSHOP_END
      // FINAL_START
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      // FINAL_END
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    }),
  }
  return callback(null, response)
}
