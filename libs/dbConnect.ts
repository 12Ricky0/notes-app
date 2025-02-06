/* eslint-disable @typescript-eslint/no-explicit-any*/
import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.error("Error connecting to MongoDB");
    throw new Error("Error connecting to MongoDB", error);
  }
}
