
module.exports.hello = (event, context, callback) => {
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
}
