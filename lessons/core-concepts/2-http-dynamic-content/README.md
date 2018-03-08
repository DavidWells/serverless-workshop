# Dynamic Content in Functions

This lesson will walk you setting up an http endpoint that uses dynamic values from the URL to return back custom HTML.

- [Lesson Steps](#lesson-steps)
- [Troubleshooting](#troubleshooting)
- [Complete code](#complete-code)

## Lesson Steps

1. In `serverless.yml`, add an `http` GET event with a `path` of `hello` to trigger the `queryParamsExample` function. See the http event docs: http://bit.ly/2mkgV4P

2. In `handler.js`, use the `queryParamsExample` function to return html in the callback.

    Read the `event.queryStringParameters` to grab the `name` value from the request and generate html to return back. You can use the `greetPerson` & `generateHtmlPage` utility functions to do this.

    Set the response body with the dynamic HTML.

    Finally remember to set the headers of the response as `'Content-Type': 'text/html'` to return HTML instead of the default `json`

3. Deploy the service.

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

    The deploy command should return a list of live URL endpoints for you to test out. Open the live endpoint in your browser and verify your code is returning the dynamic content

    ```bash
    https://xyz.execute-api.us-east-1.amazonaws.com/dev/hello?name=david
    ```

    If you do not see HTML being returned. Run the `sls logs` command to debug your function

    ```
    sls logs -f queryParamsExample -t
    ```

4. In `serverless.yml`, add 2 `http` GET events to trigger the `pathParamsExample` function. The first `path` should be `/` and the second should be `{name}`. See the http event docs: http://bit.ly/2yJui03

5. In `handler.js`, use the `pathParamsExample` function to return html in the callback.

    Read the `event.pathParameters` to grab the `name` value from the request and generate html to return back. You can use the `greetPerson` & `generateHtmlPage` utility functions to do this.

    Set the response body with the dynamic HTML.

    Finally, remember to set the headers of the response as `'Content-Type': 'text/html'` to return HTML instead of the default `json`

6. Deploy the service.

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

    The deploy command should return a list of live URL endpoints for you to test out. Open the live endpoint in your browser and verify your code is returning the dynamic content

    ```bash
    https://xyz.execute-api.us-east-1.amazonaws.com/dev/david
    ```

    If you do not see HTML being returned. Run the `sls logs` command to debug your function

    ```
    sls logs -f pathParamsExample -t
    ```




## Troubleshooting

- Sometimes when renaming path params APIgateway gets [this error](https://github.com/serverless/serverless/issues/3785). To fix, run `sls remove` and `sls deploy` to update the URLs


## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/2-http-dynamic-content)
