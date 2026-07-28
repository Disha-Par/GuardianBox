const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    originalName: String,
    filename: String,
    path: String,
    size: Number,
    shareId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("File", fileSchema);