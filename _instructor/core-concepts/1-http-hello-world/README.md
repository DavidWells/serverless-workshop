# Deploying Your First Endpoint

This lesson will walk you through creating a basic http functions triggered by a http GET endpoint

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. In `handler.js`, Create a `200` response code and return the `event` in the response body

2. After your handler has a response. It's time to deploy. Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

3. You can invoke the function from your terminal with

    ```bash
    sls invoke -f hello
    ```

4. In `serverless.yml`, add an `http` GET event to trigger this function. http://bit.ly/2mkgV4P

6. Deploy the function again after declaring the `http` event in `serverless.yml`

    ```bash
    sls deploy
    ```

7. The `serverless deploy` command will return a live URL of your service you can visit in your browser

    ```bash
    https://xyz-123.execute-api.us-east-1.amazonaws.com/dev/hello
    ```

8. To retrieve the service information at a later time, run the `sls info` command

    ```bash
    sls info
    ```

9. Now lets scaffold a project the easy way via the `serverless create` command. In your terminal run

    To see a list of available templates run:
    ```bash
    sls create
    ```

    To scaffold out a new service in a sub directory run:

    ```bash
    sls create -t hello-world -p my-new-service
    # This will create a new service in the my-new-service directory
    ```
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- SCROLL UP FOR STEPS -->

<!-- Step 2. After your handler has a response. It's time to deploy. Open your terminal and run the following command:

    ```bash
    sls deploy
    ```
-->

<!-- Step 3. You can invoke the function from your terminal with

    ```bash
    sls invoke -f hello
    ```
-->

<!-- Step 6. Deploy the function again after declaring the `http` event in `serverless.yml`

    ```bash
    sls deploy
    ```
-->

<!-- Step 7. The `serverless deploy` command will return a live URL of your service you can visit in your browser

    ```bash
    https://xyz-123.execute-api.us-east-1.amazonaws.com/dev/hello
    ```
-->

<!-- Step 8. To retrieve the service information at a later time, run the `sls info` command

    ```bash
    sls info
    ```
-->


<!-- Step 9. Now lets scaffold a project the easy way via the `serverless create` command. In your terminal run

    To see a list of available templates run:
    ```bash
    sls create
    ```

    To scaffold out a new service in a sub directory run:

    ```bash
    sls create -t hello-world -p my-new-service
    # This will create a new service in the my-new-service directory
    ```
-->
