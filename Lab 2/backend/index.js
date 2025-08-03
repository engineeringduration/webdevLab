require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
// 🔧 Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 📦 Set up storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    resource_type: "raw", // ✅ moved inside params
    allowed_formats: ["jpg", "png", "jpeg", "pdf", "docx", "txt"],
  },
});


const upload = multer({ storage });

// 📂 Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📤 File upload route
app.post("/upload", upload.single("myfile"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    res.status(200).json({
      message: "File uploaded successfully",
      url: req.file.path,
    });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
});

// 📨 Form submit route
app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  res.status(200).json({ message: "Form submitted successfully" });
});

// 🌐 Static HTML routes

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend')));



// 🚀 Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
