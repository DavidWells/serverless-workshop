# Simple Kinesis Example

- [ ] TODO update script to work on windows. `yargs` isn't working properly.

In this lesson we will deploy a new service with a kinesis stream.

The service will have one function that will batch process the events coming into the kinesis stream.

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)

## Lesson Steps

1. Install the projects dependencies.

    Open your terminal and run the following command:

    ```bash
    npm install yargs aws-sdk --save-dev
    ```

    This will install our dev dependancies needed for simulating events on our kinesis stream

2. Define the kinesis stream in `serverless.yml`

    Under the `resources` block of `serverless.yml`, add in the CloudFormation needed to create a kinesis stream

    ```yml
    resources:
      Resources:
        MyKinesisStream:
          Type: AWS::Kinesis::Stream
          Properties:
            Name: 'my-stream-name'
            ShardCount: 1
    ```

3. In `serverless.yml`, define a `custom` block and setup a `stage` value using serverless variable syntax. Set the default stage as 'dev' with CLI options flag to overide it. `${opt:stage, 'dev'}`

4. In `serverless.yml`, inside the `custom` block define a `streamName` value and post fix the variable with the custom stage value. Example: `my-kinesis-stream-${self:custom.stage}`

5. In `serverless.yml`, reference the newly created `custom.streamName` value as the `Name` property of the kinesis stream `resource` definition

6. In `serverless.yml`, make a new `function` block and connect to the `processEvents` function. The function `events` will be trigged by the kinesis `arn`. http://bit.ly/2htzI8r

7. It's time to deploy our service.

    Open your terminal and run the following command:

    ```bash
    sls deploy
    ```

    By default this will deploy to `dev`, we can change that by providing an `--stage` flag to the deploy command

    ```
    sls deploy --stage prod
    ```

8. Simulate events into your stream

    Open your terminal and run the following command:

    ```bash
    npm run simulate --name=my-kinesis-stream-dev
    ```

9. Validate events are processing correctly

    Open your terminal and run the following command:

    ```bash
    sls logs -f processEvents -t
    ```

    This will pull in the latest logs for the `processEvents` function and tail them. You should see the log statements of the function








## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/kinesis/kinesis-basic)
