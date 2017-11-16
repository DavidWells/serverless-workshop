# Deploying an http POST endpoint with CORS support

This lesson will walk you through creating a basic http functions triggered by a http POST endpoint with CORS support.

`cors` is needed for interacting (a.k.a making `ajax` calls) to API endpoints from web applications.

## Steps

1. In `serverless.yml`, add the `cors` settings to `http` event. See the http event docs for more info http://bit.ly/2mkgV4P

2. In `handler.js`, Set `headers` in the function response for CORS to work.  http://bit.ly/2mkgV4P

3. After your handler has a response. It's time to deploy the `cors` enabled endpoint. Open your terminal and run the following command:

    ```bash
    sls deploy
    ```




## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/3-http-post-with-cors)
