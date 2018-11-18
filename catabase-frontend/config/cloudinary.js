// config/ cloudinary.js

const Cloudinary = require("cloudinary");
const React = require("react");
const CloudinaryImage = Cloudinary.CloudinaryImage;

Cloudinary.config({
  cloud_name: keys.cloudinarycloud,
  api_key: keys.apiKey,
  api_secret: keys.apiSecret
});

const imgOptions = {
  transformation: [
    {
      width: 200,
      height: 200,
      cop: "fill"
    }
  ]
};

const CloudinaryUtil = {
  openUploadWidget(setUrl) {
    cloudinary.openUploadWidget(
      {
        cloud_name: "cats",
        // upload_preset: "twwfu72j",
        allowedFormats: ["jpg", "png"],
        multiple: false,
        filename: function(req, file, cb) {
          cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
        }
      },
      (error, result) => {
        setUrl(result[0]);
      }
    );
  },
  image(photoName, options) {
    return (
      // <CloudinaryImage className="img-idx" publicId={photoName} options={imgOptions}/>
      Cloudinary.url(photoName, options)
    );
  }
};

module.exports = CloudinaryUtil;
