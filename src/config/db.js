import mongoose from "mongoose";

const connectDb = async (url) => {
  if (!url) throw new Error("MONGODB_URL Has been Missing!");
  try {
    await mongoose.connect(url);
    console.log("Database connection Successful");
  } catch (error) {
    console.log("Database connection failed");
    throw error;
  }
};

export default connectDb;
