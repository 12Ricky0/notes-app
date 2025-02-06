import mongoose from "mongoose";
import { NoteUser } from "@/libs/definitions";

const userSchema = new mongoose.Schema<NoteUser>({
  email: String,
  password: String,
});

const User =
  mongoose.models.User || mongoose.model<NoteUser>("User", userSchema);

export default User;
