export const foo = (event, context) => {
  console.log('process.env.MY_ENV_VAR', process.env.MY_ENV_VAR)
  /* MY_ENV_VAR_FOR_BAR will be undefined */
  console.log('process.env.MY_ENV_VAR_FOR_BAR', process.env.MY_ENV_VAR_FOR_BAR)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: `hello ${process.env.MY_ENV_VAR}`
    }),
  }
  return response
}

export const bar = (event, context) => {
  /* both env variables will be accessible in bar */
  console.log('process.env.MY_ENV_VAR', process.env.MY_ENV_VAR)
  console.log('process.env.MY_ENV_VAR_FOR_BAR', process.env.MY_ENV_VAR_FOR_BAR)

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: `hello ${process.env.MY_ENV_VAR_FOR_BAR}`
    }),
  }
  return response
}
