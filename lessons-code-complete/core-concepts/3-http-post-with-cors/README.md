# Deploying an http POST endpoint with CORS support

Lambda functions are commonly used for backend APIs for frontend web apps.

By default, the urls for your APIs will be on an AWS domain like `https://abc-123.execute-api.us-east-1.amazonaws.com/dev/hello`.

For these cross domain api calls to work, **cors** must be enabled.

**CORS** or Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) than the site currently in use.

This lesson will walk through creating an http function triggered by a `POST` request with **CORS** support enabled.

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)

## Lesson Steps

1. In `serverless.yml`, add the `cors` settings to `http` event. See the http event docs for more info http://bit.ly/2mkgV4P

2. In `handler.js`, set `headers` key of the function response object.

    Set the `"Access-Control-Allow-Origin"` & `"Access-Control-Allow-Credentials"` headers.

    For additional information, see the cors docs http://bit.ly/2FlFSWB

3. Now deploy the `cors` enabled endpoint.

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

4. (optional) Setting a custom domain

    Alternatively, You can [setup a custom domain](https://serverless.com/blog/serverless-api-gateway-domain/) to mask your AWS urls with your own domain. This will side step the need for CORs support.

    One thing to note: when running integration tests against multiple services, you still might need to hit the raw AWS endpoint. In this case, it's recommended that you still use the cors enabled endpoints.



## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/3-http-post-with-cors)
