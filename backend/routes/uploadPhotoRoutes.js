const express = require("express");
const multer = require("multer");
const router = express.Router();
const { createPhoto } = require("../controllers/photoController");

const upload = multer({ dest: "uploads/" });

router.route("/").post(upload.single("imageFile"), createPhoto);

module.exports = router;
