/* Step 2. In this_file, Set `headers` in the function response for CORS to work.  http://bit.ly/2mkgV4P */
module.exports.functionWithCors = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    }),
  }
  return callback(null, response)
}
