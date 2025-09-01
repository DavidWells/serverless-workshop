import fetch from 'node-fetch';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
const s3 = new S3Client({});
const BUCKET_NAME = process.env.BUCKET_NAME

export const saveImage = async (event, context) => {
  const key = event.key || JSON.parse(event.body).key
  const imageURL = event.image_url || JSON.parse(event.body).image_url

  try {
    const response = await fetch(imageURL);
    const buffer = await response.buffer();
    
    await s3.send(new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: buffer,
    }));
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'image saved to bucket'
      }),
    }
  } catch (error) {
    throw error
  }
}
