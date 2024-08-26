import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Resolve the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory for uploads
const baseDir = path.join(__dirname, "..", "public");

// Create necessary directories if they do not exist
const ensureDirExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Ensure the specific directories exist
const filesDir = path.join(baseDir, "files");
const imagesDir = path.join(baseDir, "images");
const videosDir = path.join(baseDir, "videos");

ensureDirExists(filesDir);
ensureDirExists(imagesDir);
ensureDirExists(videosDir);

// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { type } = req.params;

    let uploadPath;
    switch (type) {
      case "images":
        uploadPath = imagesDir;
        break;
      case "videos":
        uploadPath = videosDir;
        break;
      case "files":
        uploadPath = filesDir;
        break;
      default:
        return cb(new Error("Invalid type"), null);
    }

    cb(null, uploadPath); // Use the determined path
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});

// File filter to accept only certain file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = {
    images: ["image/jpeg", "image/jpg", "image/png", "image/gif"],
    videos: ["video/mp4"],
    files: ["*/*"], // Allow any type for files
  };

  const { type } = req.params;
  const allowed = allowedTypes[type] || [];

  if (allowed.includes(file.mimetype) || type === "files") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

// Initialize multer with storage and file filter
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});

const router = express.Router();

// Route to handle file uploads
router.post("/:type", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    res.json({
      message: "File uploaded successfully",
      fileName: req.file.filename,
    });
  } catch (error) {
    res.status(500).send("Failed to upload file.");
  }
});

export default router;
