
module.exports.hello = (event, context, callback) => {
  // WORKSHOP_START
  /* Step 1. In this_file, Create a `200` response code and return the `event` data in the response body.

    The response needs a `statusCode` and a `body` object returned. Remember to `JSON.stringify` the body.

    For more details, see the http event docs link http://bit.ly/2mkgV4P
  */
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
