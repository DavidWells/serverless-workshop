
export const hello = (event, context) => {
  const response = {
    /* Status code required for default lambda integration */
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi',
    }),
  }
  /** callback(error, response) */
  return response
}
