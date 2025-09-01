/* Step 2. In this_file, set `headers` key of the function response object.

    Set the `"Access-Control-Allow-Origin"` & `"Access-Control-Allow-Credentials"` headers.

    For additional information, see the cors docs http://bit.ly/2FlFSWB
*/
export const functionWithCors = (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    }),
  }
  return response
}
