require("dotenv").config();
const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3
function upload(file) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };
  return s3.upload(uploadParams).promise();
}

async function getList() {
  // let allKeys = [];
  const params = { Bucket: bucketName };
  // let result = await s3.listObjectsV2({ Bucket: bucketName }).promise();
  // await s3.listObjectsV2(params, function (err, data) {
  //   if (err) {
  //     console.log(err, err.stack);
  //   } else {
  //     let contents = data.contents;
  //     contents.forEach(function (content) {
  //       allKeys.push(content.key);
  //     });
  //   }
  // });
  let result = await s3.listObjectsV2(params).promise();
  return result;
}

module.exports = { upload, getList };
