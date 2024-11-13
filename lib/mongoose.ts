import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  console.log("connecting to mongodb", process.env.MONGODB_URL);

  if (!process.env.MONGODB_URL) {
    console.log("mongodb not connected");
    return;
  }
  console.log("connecting to mongodb");
  if (isConnected) {
    console.log("already connected to mongodb");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("connected to mongodb");
  } catch (error: any) {
    throw new Error(`Error connecting to MongoDB: ${error.message}`);
  }
};
