const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(`Error Connecting to DB :${error.message}`);
  }
};

module.exports = connectDB;
