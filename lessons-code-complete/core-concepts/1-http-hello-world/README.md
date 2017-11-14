# Deploying Your First Endpoint

This lesson will walk you through creating a basic http functions triggered by a http GET endpoint

## Steps

1. First write your code in `handler.js`
2. Then `sls deploy`
3. Then update `serverless.yml` with the http event
4. Then deploy again

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
<!-- AUTO-GENERATED-CONTENT:END -->


Run `sls info` in your terminal to get your live endpoint information

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
