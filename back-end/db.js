const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected`.cyan);
  } catch (error) {
    console.log(error);

    // exit the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
