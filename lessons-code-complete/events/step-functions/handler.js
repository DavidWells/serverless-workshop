/* run step function */
import { SFNClient, StartExecutionCommand } from '@aws-sdk/client-sfn';
const STATE_MACHINE_ARN = process.env.STATE_MACHINE_ARN
const stepfunctions = new SFNClient({});

export const startStateMachine = async (event, context) => {
  const body = JSON.parse(event.body)
  const taskName = body.taskName
  const startAt = body.startAt

  const params = {
    name: taskName, // taskID and user id?
    stateMachineArn: STATE_MACHINE_ARN,
    input: JSON.stringify({
      // The timestamp must conform to the RFC3339 profile of ISO 8601
      // 1331209044000 to toISOString
      // unix * 1000 => new Date(unix * 1000).toISOString()
      trigger_date: new Date(startAt).toISOString()
      // "trigger_date": "2017-10-15T23:51:09.000Z"
    })
  }
  // start step function
  try {
    const data = await stepfunctions.send(new StartExecutionCommand(params));
    console.log(data) // successful response
    console.log(data.executionArn) // needed for cancels
    console.log(data.startDate)
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Started the step function. View the scheduled step function in aws console.',
        params: params
      }),
    };
    return response
  } catch (err) {
    console.log(err, err.stack) // an error occurred
    throw err
  }
}


export const sendEmail = (event, context) => {
  const time = new Date()
  console.log(`send email triggered at ${time}`)

  // Implement email sending functionality here
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    }),
  };

  return response;
};
