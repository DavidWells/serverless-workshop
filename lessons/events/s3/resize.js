// dependencies
const util = require('util')
const path = require('path')
const async = require('async')
const AWS = require('aws-sdk')
const gm = require('gm').subClass({
  imageMagick: true
})

// get reference to S3 client
const s3 = new AWS.S3()

module.exports.resizeImage = (event, context, callback) => {
  // Read options from the event.
  console.log("Reading options from event:\n", util.inspect(event, {
      depth: 5
  }))
  const srcBucket = event.Records[0].s3.bucket.name
  // Object key may have spaces or unicode non-ASCII characters.
  const srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '))
  const dstBucket = `${srcBucket}-output`
  // Sanity check: validate that source and destination are different buckets.
  if (srcBucket === dstBucket) {
    console.log('Destination bucket must not match source bucket.')
    console.log('This would result in an infinite loop')
    return callback(null, {
      statusCode: 501,
      body: JSON.stringify({
        error: 'Destination Matches source bucket'
      }),
    });
  }

  // Image sizes and output folder paths
  const sizes = [
    {
      width: 800,
      dstnKey: srcKey,
      destinationPath: "large"
    },
    {
      width: 500,
      dstnKey: srcKey,
      destinationPath: "medium"
    },
    {
      width: 200,
      dstnKey: srcKey,
      destinationPath: "small"
    },
    {
      width: 45,
      dstnKey: srcKey,
      destinationPath: "thumbnail"
    }
  ]

  console.log(srcBucket)
  console.log(srcKey)
  // Infer the image type.
  const typeMatch = srcKey.match(/\.([^.]*)$/)
  const fileName = path.basename(srcKey)
  if (!typeMatch) {
    console.error('unable to infer image type for key ' + srcKey)
    return
  }
  const imageType = typeMatch[1].toLowerCase()
  if (imageType != "jpg" && imageType != "gif" && imageType != "png" && imageType != "eps") {
    console.log('skipping non-image ' + srcKey)
    return
  }
  // Transform, and upload to same S3 bucket but to a different S3 bucket.
  async.forEachOf(sizes, function(value, key, asyncCallback) {
    // waterfall === same as promise chain
    async.waterfall([
      function download(next) {
        console.time("downloadImage")
        console.log("download image")
        // Download the image from S3 into a buffer.
        // sadly it downloads the image several times, but we couldn't place it outside
        // the variable was not recognized
        s3.getObject({
          Bucket: srcBucket,
          Key: srcKey
        }, next)
        console.timeEnd("downloadImage")
      },
      function convert(response, next) {
        // convert eps images to png
        console.time("convertImage")
        console.log(`Reponse content type: ${response.ContentType}`)
        console.log("Conversion")
        gm(response.Body)
          .antialias(true)
          .density(300)
          .toBuffer('JPG', (err, buffer) => {
            if (err) {
              return next(err)
            }
            console.timeEnd("convertImage")
            return next(null, buffer)
        })
      },
      function process(response, next) {
        console.log("process image")
        console.time("processImage")
        // Transform the image buffer in memory.
        // gm(response.Body).size(function(err, size) {
        gm(response).size(function(err, size) {
          // console.log("buf content type " + buf.ContentType)
          if (err) {
            console.log(err)
          }
          // Infer the scaling factor to avoid stretching the image unnaturally.
          const currentWidth = sizes[key].width
          console.log(`run ${key} size array: ${currentWidth}`)
          console.log(`run ${key} size: ${size}`)

          const scalingFactor = Math.min(currentWidth / size.width, currentWidth / size.height)
          console.log(`run ${key} scalingFactor: ${scalingFactor}`)
          const width = scalingFactor * size.width
          const height = scalingFactor * size.height
          console.log(`run ${key} width: ${width}`)
          console.log(`run ${key} height: ${height}`)
          var index = key
          // this.resize({width: width, height: height, format: 'jpg',})
          this.resize(width, height).toBuffer('JPG', (err, buffer) => {
            if (err) {
              return next(err)
            }
            console.timeEnd("processImage")
            return next(null, buffer, key)
          })
        })
      },
      function upload(data, index, next) {
        console.time("uploadImage")
        const currentDestination = sizes[index].destinationPath
        const keyPath = `images/${currentDestination}/${fileName.slice(0, -4)}.jpg`
        console.log("upload: " + index)
        console.log(`uploadPath: /${keyPath}`)
        // Stream the transformed image to a different folder.
        s3.putObject({
          Bucket: dstBucket,
          Key: keyPath,
          Body: data,
          ContentType: 'JPG'
        }, next)
        console.timeEnd("uploadImage")
      }
    ], function(err, result) {
      if (err) {
        console.error(err)
      }
      // result now equals 'done'
      console.log("End of step " + key)
      asyncCallback()
    })
  }, function(err) {
    if (err) {
      console.log(`--> Unable to resize ${srcBucket}/${srcKey} & upload to ${dstBucket}/images`)
      console.log(err)
    } else {
      console.log(`--> Successfully resized ${srcBucket} & uploaded to ${dstBucket}/images`)
    }
    // context.done()
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        imageProcessed: true
      }),
    }
    return callback(null, response)
  })
}
