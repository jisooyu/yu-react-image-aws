const asyncHandler = require("express-async-handler");
const { upload } = require("./awsController");

const createPhoto = asyncHandler(async (req, res) => {
  const image = req.file;
  const result = await upload(image);
  res.send(result);
});

module.exports = { createPhoto };
