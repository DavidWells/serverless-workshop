import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
const sns = new SNSClient({});
const TOPIC_NAME = process.env.TOPIC_NAME

export const eventProducer = async (event, context) => {
  const functionArnCols = context.invokedFunctionArn.split(':')
  const region = functionArnCols[3]
  const accountId = functionArnCols[4]

  const params = {
    Message: `triggering other Lambda(s). Send via ${TOPIC_NAME}`,
    TopicArn: `arn:aws:sns:${region}:${accountId}:${TOPIC_NAME}`
  }

  try {
    const data = await sns.send(new PublishCommand(params));
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Message successfully published to SNS topic "${TOPIC_NAME}"`
      }),
    }
  } catch (error) {
    throw error
  }
}

export const eventConsumer = (event, context) => {
  // print out the event information on the console (so that we can see it in the CloudWatch logs)
  console.log(`I'm triggered by "eventProducer" through the SNS topic "${TOPIC_NAME}"`)
  console.log(`event:\n${JSON.stringify(event, null, 2)}`)
  return {
    event: event
  }
}
