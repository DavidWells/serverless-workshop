/* run step function */
const AWS = require('aws-sdk')
const STATE_MACHINE_ARN = process.env.STATE_MACHINE_ARN
const stepfunctions = new AWS.StepFunctions()

/* Step 6. In this_file the `startStateMachine` will handle the creation of the new step function.

    Using the aws-sdk, use the StepFunctions `startExecution` method to start the new task

    See docs for more details http://amzn.to/2zP0OPW
*/
module.exports.startStateMachine = (event, context, callback) => {
  const body = JSON.parse(event.body)
  const taskName = body.taskName
  const startAt = body.startAt

  // Implement `AWS.StepFunctions` startExecution call here
}


module.exports.sendEmail = (event, context, callback) => {
  const time = new Date()
  console.log(`send email triggered at ${time}`)

  // Implement email sending functionality here
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    }),
  };

  return callback(null, response);
};
