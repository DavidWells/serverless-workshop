# Deploying an http POST endpoint with CORS support

This lesson will walk you through creating a basic http functions triggered by a http POST endpoint with CORS support.

`cors` is needed for interacting (a.k.a making `ajax` calls) to API endpoints from web applications.

## Steps

1. In `serverless.yml`, add the `cors` settings to `http` event. See the http event docs for more info http://bit.ly/2mkgV4P

2. In `handler.js`, set `headers` key of the function response object.

    Set the `"Access-Control-Allow-Origin"` and `"Access-Control-Allow-Credentials"` headers. This is required for CORs to function properly.

    For additional information, see the cors docs http://bit.ly/2FlFSWB

3. After your handler has a response. It's time to deploy the `cors` enabled endpoint. Open your terminal and run the following command:

    ```bash
    sls deploy
    ```




## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/3-http-post-with-cors)
