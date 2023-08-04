const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Create a storage engine to define where to store the uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Use a timestamp as the filename
  },
});

// Create a multer instance with the storage engine
const upload = multer({ storage });

// Route for image uploads
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided.' });
  }
  const imageUrl = req.file.path; // This will be the path where the image is stored
  res.status(200).json({ imageUrl });
});

module.exports = router;
