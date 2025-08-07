import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const connectDB = async function () {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
