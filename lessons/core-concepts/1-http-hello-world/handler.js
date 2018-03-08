
module.exports.hello = (event, context, callback) => {
  /* Step 1. In this_file, Create a `200` response code and return the `event` data in the response body.

    The response needs a `statusCode` and a `body` object returned. Remember to `JSON.stringify` the body.

    For more details, see the http event docs link http://bit.ly/2mkgV4P
  */
  const response = {}
  return callback(null, response);
}
