const asyncHandler = require("express-async-handler");
const { upload, getList } = require("./awsController");

const createPhoto = asyncHandler(async (req, res) => {
  const image = req.file;
  const result = await upload(image);
  res.send(result);
});

const getPhotos = asyncHandler(async (req, res) => {
  const result = getList();
  res.send(result);
});
module.exports = { createPhoto, getPhotos };
