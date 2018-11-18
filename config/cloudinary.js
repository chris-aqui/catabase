// config/ cloudinary.js

const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const keys = require("./keys");

cloudinary.config({
  cloud_name: keys.cloudinarycloud,
  api_key: keys.apiKey,
  api_secret: keys.apiSecret
});

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "cats", // The name of the folder in cloudinary
  allowedFormats: ["jpg", "png"],
  filename: function(req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
