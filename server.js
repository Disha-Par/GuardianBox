const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
console.log("NEW SERVER FILE LOADED");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const authRoutes = require("./routes/auth");
const fileRoutes = require("./routes/files");

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

app.get("/", (req, res) => {
  res.send("GuardianBox Backend Running");
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.log("MongoDB Error:", err);
  }
}

startServer();

console.log("TEST-USER ROUTE LOADED");

app.get("/test-user", async (req, res) => {
  const User = require("./models/User");

  res.json({
    readyState: User.db.readyState,
    dbName: User.db.name,
  });
});