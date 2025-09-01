/* Step 3. In this_file, access the newly created environment variables

    Lambda environment variables are accessible on the `process.env` object in node.

    `process.env.[YourEnvKeyName]`

    Return the environment variable in the `foo` function response
*/
export const foo = (event, context) => {
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
  return response
}

/* Step 4. In this_file, access the newly created scoped `bar` environment variables

    `process.env.[YourEnvKeyName]`

    Return the environment variable in the `bar` function response
*/
export const bar = (event, context) => {

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
  return response
}
