const express = require("express");
const multer = require("multer");
const crypto = require("crypto");

const File = require("../models/File");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const newFile = new File({
      originalName: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      shareId: crypto.randomBytes(8).toString("hex"),
    });

    await newFile.save();

    res.json({
      message: "File uploaded successfully",
      shareLink: `http://localhost:3000/share/${newFile.shareId}`,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
});
router.get("/share/:shareId", async (req, res) => {
  try {
    const file = await File.findOne({
      shareId: req.params.shareId,
    });

    if (!file) {
      return res.status(404).json({
        message: "File not found",
      });
    }

    res.json(file);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
// GET ALL FILES
router.get("/", async (req, res) => {
  try {
    const File = require("../models/File");

    const files = await File.find().sort({ createdAt: -1 });

    res.json(files);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});
module.exports = router;