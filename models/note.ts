import mongoose from "mongoose";
import { Notes } from "@/libs/definitions";

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    content: {
      type: String,
      required: true,
    },
    lastEdited: {
      type: Date,
      default: Date.now,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Note = mongoose.models.Note || mongoose.model<Notes>("Note", noteSchema);

export default Note;
