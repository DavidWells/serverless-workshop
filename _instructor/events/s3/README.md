# Triggering Lambda functions from s3 events

This lesson will walk through triggering a lambda function in response to an s3 `ObjectCreated` event.

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [S3 bucket CloudFormation template](#s3-bucket-cloudformation-template)
- [Triggering events from existing buckets](#triggering-events-from-existing-buckets)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. Install the required dependancies.

    In your terminal run the following command.

    ```bash
    npm install async gm node-fetch --save
    ```

2. In `serverless.yml`, Define a `custom` block and add `bucketName` & `outputBucketName` values. Make it globally unique. We will use this reference in other areas of serverless.yml

3. In `serverless.yml`, add an `outputBucketName` to the `custom` block. Use serverless variables to reference the orignal bucket name and postfix it with `-ouput` `${self:custom.bucketName}-output`

4. In `serverless.yml`, Expose the `bucketName` to `environment` variables

5. In `serverless.yml`, Create the IAM role `iamRoleStatements` needed to `s3:GetObject` & `s3:PutObject`

6. in `serverless.yml`, attach the s3 event to the `resize` function and trigger when images are added to bucket. a.k.a the `ObjectCreated` s3 event. See the s3 event docs link http://bit.ly/2zyiRMB

7. in `serverless.yml`, add an additional bucket in `resources`. This bucket will be used for storing the resized images. This it to avoid an infinite loop while listening to the s3 events

8. **Deploy the service**

    Run the following command in your CLI

    ```bash
    sls deploy
    ```

9. **Trigger the live `save` endpoint**

    To get information about the service run
    ```bash
    sls info
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/save
    ```

    Take your live endpoint and `curl` it or use [PostMan](https://www.getpostman.com) to post to it.

    Send this json in the body of the request

    ```json
    {
      "image_url": "https://flavorwire.files.wordpress.com/2015/09/o-bill-facebook.jpg",
      "key": "bill-murray.jpg"
    }
    ```

    `curl` example:

    ```bash
    curl -vvv -X POST -d '{"image_url": "url", "key": "file-name-key"}' -H "Content-Type: application/json" https://xxx.execute-api.us-west-2.amazonaws.com/dev/create
    ```

    You should receive a response with the new item. (or an error if dynamo fails)

10. **Verify image resizing is working**

    You can check the resize image logs

    ```bash
    sls logs -f resize
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/resize
    ```

    Or login to your AWS account and look at the input and output bucket
<!-- AUTO-GENERATED-CONTENT:END -->

## S3 bucket CloudFormation template

```yml
resources:
  Resources:
    UploadBucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: ${self:custom.bucketName}-output
        AccessControl: PublicRead
        CorsConfiguration:
          CorsRules:
            - AllowedMethods:
              - GET
              - PUT
              - POST
              - HEAD
              AllowedOrigins:
              - "*"
              AllowedHeaders:
              - "*"
```

## Triggering events from existing buckets

Want to trigger a function from an already existing s3 bucket?
You will need to install the [serverless-external-s3-event plugin](https://github.com/matt-filion/serverless-external-s3-event) https://github.com/matt-filion/serverless-external-s3-event

<!-- Step 1. Install the required dependancies.

    In your terminal run the following command.

    ```bash
    npm install async gm node-fetch --save
    ```
-->    

<!-- Step 8. **Deploy the service**

    Run the following command in your CLI

    ```bash
    sls deploy
    ```
-->

<!-- Step 9. **Trigger the live `save` endpoint**

    To get information about the service run
    ```bash
    sls info
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/save
    ```

    Take your live endpoint and `curl` it or use [PostMan](https://www.getpostman.com) to post to it.

    Send this json in the body of the request

    ```json
    {
      "image_url": "https://flavorwire.files.wordpress.com/2015/09/o-bill-facebook.jpg",
      "key": "bill-murray.jpg"
    }
    ```

    `curl` example:

    ```bash
    curl -vvv -X POST -d '{"image_url": "url", "key": "file-name-key"}' -H "Content-Type: application/json" https://xxx.execute-api.us-west-2.amazonaws.com/dev/create
    ```

    You should receive a response with the new item. (or an error if dynamo fails)
-->

<!-- Step 10. **Verify image resizing is working**

    You can check the resize image logs

    ```bash
    sls logs -f resize
    # https://xxx.execute-api.us-west-2.amazonaws.com/dev/resize
    ```

    Or login to your AWS account and look at the input and output bucket
-->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/serverless-workshop/tree/master/lessons-code-complete/events/s3)
<!-- AUTO-GENERATED-CONTENT:END -->

## Alternative methods

You can wire up s3 notifications via cloudformation as well. See [docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig.html)

Example cloudformation:

```yml
resources:
  Resources:
    Bucket:
      Type: AWS::S3::Bucket
      ...
      Properties:
        NotificationConfiguration:
          TopicConfigurations:
            - Event: s3:ObjectCreated:Put
              Topic:
                Ref: BucketTopic
```
