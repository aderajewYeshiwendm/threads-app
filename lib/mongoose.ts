import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("mongodb not connected");
  if (isConnected) return console.log("already connected to mongodb");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};
