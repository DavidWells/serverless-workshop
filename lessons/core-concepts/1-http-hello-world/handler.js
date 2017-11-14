
module.exports.hello = (event, context, callback) => {
  // Create a `200` response code and return the `event` in the response body
  // docs link http://bit.ly/2mkgV4P
  const response = {}
  return callback(null, response);
}
