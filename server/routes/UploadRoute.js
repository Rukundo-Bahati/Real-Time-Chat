import express from "express";
const router = express.Router();
import multer from "multer"; //for file upload

// Set up storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

// Initialize multer with storage settings
const upload = multer({ storage: storage });

// Define route to handle file upload
router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

export default router;
