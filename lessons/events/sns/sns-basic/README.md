# Basic SNS Example

This example shows how we can use SNS topics and Lambda functions for consuming events.

In this basic example the serverless framework automatically creates the sns topic for you.

See the advanced example for how to subscribe to existing sns topics.

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)

## Lesson Steps

1. In `serverless.yml`, Define a `custom` block and add `topicName`. We will use this reference in other areas of `serverless.yml`

2. in `serverless.yml`, attach the `sns` event to the `eventConsumer` function. See the sns event docs link http://bit.ly/2mvPbdF

3. In `serverless.yml`, Expose the `TOPIC_NAME` to `environment` variables using the `${self:custom.topicName}` reference

4. In `serverless.yml`, Create the IAM role `iamRoleStatements` needed to `sns:Publish`. This allows for our `eventProducer` function to publish messages to our SNS topic.

5. **Deploy the service**

    Run the following command in your CLI

    ```bash
    sls deploy
    ```

6. **Trigger the live `eventProducer` endpoint**

    To get information about the service run
    ```bash
    sls info
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/eventProducer
    ```

    Take your live endpoint and open it in the browser.

    ```bash
    Message successfully published to SNS topic TOPIC_NAME
    ```

7. **Verify eventConsumer is working**

    You can check the resize image logs

    ```bash
    sls logs -f eventConsumer -t
    ```

    Or login to your AWS account and look at sns topic subscribers

8. (optional) **Clean up the service**

    To remove the full service and sns topics run

    ```bash
    sls remove
    ```





## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/sns/sns-basic)
