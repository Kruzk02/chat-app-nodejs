const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://mongo:27017/chatapp");
    console.log("MongoDB connected successfully");
  }catch(err) {
    console.error("MongoDb connection failed", err);
    process.exit(1)
  }
}

module.exports = connectDB;
