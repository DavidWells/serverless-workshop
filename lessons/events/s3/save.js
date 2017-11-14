const fetch = require('node-fetch')
const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const BUCKET_NAME = process.env.BUCKET_NAME

module.exports.saveImage = (event, context, callback) => {
  const key = event.key || JSON.parse(event.body).key
  const imageURL = event.image_url || JSON.parse(event.body).image_url

  fetch(imageURL)
    .then(response => response.buffer())
    .then(buffer => (
      s3.putObject({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: buffer,
      }).promise()
    ))
    .then(() => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'image saved to bucket'
        }),
      })
    })
    .catch((error) => {
      return callback(error, null)
    })
}
