/* Step 2. In this_file, use the `queryParamsExample` function to return html in the callback.

    Read the `event.queryStringParameters` to grab the `name` value from the request and generate html to return back. You can use the `greetPerson` & `generateHtmlPage` utility functions to do this.

    Set the response body with the dynamic HTML.

    Finally remember to set the headers of the response as `'Content-Type': 'text/html'` to return HTML instead of the default `json`
 */
module.exports.queryParamsExample = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
    }),
  }
  return callback(null, response)
}

/* Step 5. In this_file, use the `pathParamsExample` function to return html in the callback.

    Read the `event.pathParameters` to grab the `name` value from the request and generate html to return back. You can use the `greetPerson` & `generateHtmlPage` utility functions to do this.

    Set the response body with the dynamic HTML.

    Finally, remember to set the headers of the response as `'Content-Type': 'text/html'` to return HTML instead of the default `json`
 */
module.exports.pathParamsExample = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
    }),
  }
  return callback(null, response)
}

/* Utility function for rendering HTML */
const generateHtmlPage = (content) => {
  /* for security always escape output html */
  // const safeValues = escapeHtml(content)
  return `
    <html>
      <style>
        h1 { color: #73757d }
      </style>
      <body>
        ${content}
      </body>
    </html>`
}

/* Utility function for rendering hello message HTML */
const greetPerson = (name) => {
  const userName = name || 'Unknown Person!'
  return `<p>Hey ${userName}!</p>`
}
