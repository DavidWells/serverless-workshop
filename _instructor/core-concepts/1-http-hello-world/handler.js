
module.exports.hello = (event, context, callback) => {
  // WORKSHOP_START
  // Create a `200` response code and return the `event` in the response body
  // docs link http://bit.ly/2mkgV4P
  const response = {}
  return callback(null, response);
  // WORKSHOP_END
  // FINAL_START
  const response = {
    /* Status code required for default lambda integration */
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    }),
  }
  /** callback(error, response) */
  return callback(null, response)
  // FINAL_END
}
