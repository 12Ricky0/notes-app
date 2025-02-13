import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    user: String,
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

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
