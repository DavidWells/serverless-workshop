/* Step 3. In this_file, access the newly created environment variables

    Lambda environment variables are accessible on the `process.env` object in node.

    `process.env.[YourEnvKeyName]`

    Return your environment variable in the `foo` function response 
*/
module.exports.foo = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: 'return env variable here'
    }),
  }
  return callback(null, response)
}

/* Step 4. In this_file, access your newly created `bar` environment variable off of `process.env` and return it in the `bar` function response  */
module.exports.bar = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: 'return env variable here'
    }),
  }
  return callback(null, response)
}
