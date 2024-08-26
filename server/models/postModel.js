import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String, default: "" },
    likes: { type: Array, default: [] },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,      // For image files
    video: String,      // For video files
    file: String,       // For other files (e.g., PDFs, documents)
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
