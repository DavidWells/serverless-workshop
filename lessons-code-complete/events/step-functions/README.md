# Using AWS Step Functions

This example will walk us through using [AWS step functions](https://aws.amazon.com/step-functions/) to create advanced workflows with lambda functions.

- [Lesson Steps](#lesson-steps)
- [Additional resources](#additional-resources)
- [Complete code](#complete-code)

## Lesson Steps

1. Install the projects dependencies.

    Open your terminal and run the following command:

    ```bash
    npm install serverless-pseudo-parameters serverless-step-functions --save-dev
    ```

    Add the plugins to `serverless.yml` file

    ```
    plugins:
      - serverless-step-functions
      - serverless-pseudo-parameters
    ```

2. Define the step function flow in `serverless.yml` under the top level `stepFunctions` key.

    Using the [Amazon States Language](http://amzn.to/2hw6pCj) define the flow of the step function.

    We will be starting a step function flow that waits for a given timestamp and then runs a given function.

    `WaitForTimestamp -> trigger SendEmail function`

    Notice in the below step function definition we are setting `SendEmail`'s `Resource` key to it's ARN

    ```yml
    stepFunctions:
      stateMachines:
        waitToSendStateMachine:
          name: myStateMachine
          definition:
            Comment: A Task Timer example of the Amazon States Language scheduling a task
            StartAt: WaitForTimestamp
            States:
              WaitForTimestamp:
                Type: Wait
                TimestampPath: "$.trigger_date"
                Next: SendEmail
              SendEmail:
                Type: Task
                Resource: "arn:aws:lambda:#{AWS::Region}:#{AWS::AccountId}:function:#{AWS::StackName}-sendEmail"
                End: true
    ```

4. In `serverless.yml`, reference the Output value of the state machine. ${self:resources.Outputs.MyStateMachine.Value} in the `environment` variables

5. In `serverless.yml`, Attach the need `iamRoleStatements` to Allow access to step functions `states:*`

6. In `handler.js` the `startStateMachine` will handle the creation of the new step function.

    Using the aws-sdk, use the StepFunctions `startExecution` method to start the new task

    See docs for more details http://amzn.to/2zP0OPW

7. **Deploy the service**

    Run the following command in your CLI
    ```bash
    sls deploy
    ```

8. **Trigger the live `start` endpoint**

    To get information about the service run
    ```bash
    sls info
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/start
    ```

    Take your live endpoint and `curl` it or use [PostMan](https://www.getpostman.com) to post to it.

    Send this json in the body of the request. Use [epochconverter](https://www.epochconverter.com/) to get a time in the near future. The `startAt` key must be a unix timestamp. example `1510842801000`

    ```json
    {
      "taskName": "taskone",
      "startAt": 1510842801000
    }
    ```

    `curl` example:
    ```bash
    curl -vvv -X POST -d '{"taskName": "tasktwo", "startAt": 1510842801000}' -H "Content-Type: application/json" https://xxx.execute-api.us-west-2.amazonaws.com/dev/start
    ```

    You should receive a response "Started the step function. View the scheduled step function in aws console."

9. Validate events are processing correctly

    After your timestamp has passed, Open your terminal and run the following command:

    ```bash
    sls logs -f sendEmail -t
    ```

    This will pull in the latest logs for the `sendEmail` function and tail them. You should see the log statements of the function with the timestamp of when the function ran

## Additional resources

- [How To Manage Your AWS Step Functions With Serverless](https://serverless.com/blog/how-to-manage-your-aws-step-functions-with-serverless/)
- [Trigger Step functions with AWS Lambda (Video)](https://www.youtube.com/watch?v=u-ALakoQ8kM)
- [Passing data between steps in Step Functions (Video)](https://www.youtube.com/watch?v=5RXSTTOiPzk)
- [AWS re:Invent 2016: Serverless Apps with AWS Step Functions (Video)](https://www.youtube.com/watch?v=75MRve4nv8s)


## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/step-functions)
