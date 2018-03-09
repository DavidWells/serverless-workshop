# Using External SNS Topics Example

This example demonstrates how to use an external SNS or already existing SNS topic as an event source.

Note: The "external or already existing" SNS topic is created in `serverless.yml` via cloudformation in the `resources` section mainly for demonstrative purposes. Typically, you would already have an SNS topic `arn` to use as the function event source.

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [SNS CloudFormation](#sns-cloudformation)
- [Intrinsic CloudFormation function for SNS ARN](#intrinsic-cloudformation-function-for-sns-arn)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. **Install the dependancies**

    We are using a serverless plugin `serverless-pseudo-parameters` to use AWS pseudo parameters.

    Run the following command in your CLI to install the dependancies

    ```bash
    npm install
    ```

2. **Add the plugin to your serverless.yml**

    Define a `plugins` block and add `serverless-pseudo-parameters` to the plugins array.

    ```yml
    plugins:
      - serverless-pseudo-parameters
    ```

3. In `serverless.yml`, define a `resources` block and add the CloudFormation to create a new SNS topic. See `readme.md` for SNS CloudFormation template

4. In `serverless.yml`, Define a `custom` block and add `topicName` and `topicArn`. We will use this reference in other areas of `serverless.yml`. http://bit.ly/2Dccix1

5. In `serverless.yml`, expose the `TOPIC_NAME` to `environment` variables using the `${self:custom.topicName}` reference. This is for the eventProducer to send message to our newly created topic

6. In `serverless.yml`, Create the IAM role `iamRoleStatements` needed to `sns:Publish`. This allows for our `eventProducer` function to publish messages to our SNS topic.

7. In `serverless.yml`, attach the `sns` event to the `eventConsumer` function. Use the full topic ARN to subscribe to the already created topic. See http://bit.ly/2Dccix1 for more info on sns event

8. **Deploy the service**

    Run the following command in your CLI

    ```bash
    sls deploy
    ```

9. **Trigger the live `eventProducer` endpoint**

    To get information about the service run
    ```bash
    sls info
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/eventProducer
    ```

    Take your live endpoint and open it in the browser.

    ```bash
    Message successfully published to SNS topic TOPIC_NAME
    ```

10. **Verify eventConsumer is working**

    You can check the resize image logs

    ```bash
    sls logs -f eventConsumer -t
    ```

    Or login to your AWS account and look at sns topic subscribers

11. (optional) **Clean up the service**

    To remove the full service and sns topics run

    ```bash
    sls remove
    ```
<!-- AUTO-GENERATED-CONTENT:END -->

## SNS CloudFormation

```
resources:
  Resources:
    MyCustomTopic:
      Type: AWS::SNS::Topic
      Properties:
        DisplayName: "Second stand alone topic created via CloudFormation"
        TopicName: 'your-topic-name'
```        

## Intrinsic CloudFormation function for SNS ARN

Using `Fn::Join` and `Fn::GetAtt` we can compose together the needed values to get our sns topic ARN.

```yml
topicArn:
  Fn::Join:
    - ''
    - - 'arn:aws:sns:'
      - Ref: AWS::Region
      - ":"
      - Ref: AWS::AccountId
      - ":"
      - Fn::GetAtt:
        - MyCustomTopic
        - TopicName
```

```json
{
  "topicArn": {
    "Fn::Join": ["", ["arn:aws:sns:", {
      "Ref": "AWS::Region"
    }, ":", {
      "Ref": "AWS::AccountId"
    }, ":", {
      "Fn::GetAtt": ["MyCustomTopic", "TopicName"]
    }]]
  }
}
```

For more on AWS Intrinsic functions checkout the [AWS docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html)      

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/sns/sns-advanced)
<!-- AUTO-GENERATED-CONTENT:END -->


<!-- Step 1. **Install the dependancies**

    We are using a serverless plugin `serverless-pseudo-parameters` to use AWS pseudo parameters.

    Run the following command in your CLI to install the dependancies

    ```bash
    npm install
    ```
-->

<!-- Step 2. **Add the plugin to your serverless.yml**

    Define a `plugins` block and add `serverless-pseudo-parameters` to the plugins array.

    ```yml
    plugins:
      - serverless-pseudo-parameters
    ```
-->

<!-- Step 8. **Deploy the service**

    Run the following command in your CLI

    ```bash
    sls deploy
    ```
-->

<!-- Step 9. **Trigger the live `eventProducer` endpoint**

    To get information about the service run
    ```bash
    sls info
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/eventProducer
    ```

    Take your live endpoint and open it in the browser.

    ```bash
    Message successfully published to SNS topic TOPIC_NAME
    ```

-->

<!-- Step 10. **Verify eventConsumer is working**

    You can check the resize image logs

    ```bash
    sls logs -f eventConsumer -t
    ```

    Or login to your AWS account and look at sns topic subscribers
-->

<!-- Step 11. (optional) **Clean up the service**

    To remove the full service and sns topics run

    ```bash
    sls remove
    ```
-->
