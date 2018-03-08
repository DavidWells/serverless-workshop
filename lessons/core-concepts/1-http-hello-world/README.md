# Deploying Your First Endpoint

This lesson will walk through creating a basic function triggered by a http GET endpoint

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)

## Lesson Steps

1. In `handler.js`, Create a `200` response code and return the `event` data in the response body.

    The response needs a `statusCode` and a `body` object returned. Remember to `JSON.stringify` the body.

    For more details, see the http event docs link http://bit.ly/2mkgV4P

2. After your handler is returning a response, it's time to deploy.

    Open your terminal and run the following command:

    ```bash
    # sls is shorthand for serverless
    sls deploy
    ```

3. Invoke the function to ensure it's working properly

    Open your terminal and run the [`invoke`](http://bit.ly/2FjBrf3) command:

    ```bash
    sls invoke -f hello
    ```

4. In `serverless.yml`, add an `events` section and an `http` GET event with the path of `hello` to trigger this function. See http event docs for more details http://bit.ly/2mkgV4P

5. Deploy the function again after declaring the `http` event in `serverless.yml`

    ```bash
    sls deploy
    ```

6. The `serverless deploy` command will return a live URL of your service you can visit in your browser

    ```bash
    https://xyz-123.execute-api.us-east-1.amazonaws.com/dev/hello
    ```

7. To retrieve the service information at a later time, run the `sls info` command

    ```bash
    sls info
    ```

8. We can shortcut this process with the `serverless create` command.

    The [`sls create` command](http://bit.ly/2G8q86G) lets users scaffold a project the easy way.

    To see a list of available templates run:

    ```bash
    sls create
    ```

    To scaffold out a new service in a sub directory run:

    ```bash
    sls create -t hello-world -p my-new-service
    ```

    This will create a new service in the `my-new-service` directory








## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/core-concepts/1-http-hello-world)
