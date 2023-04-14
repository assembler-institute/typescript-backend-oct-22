import mongoose, { Schema } from "mongoose";
import { Ipost } from "../Types/Ipost";
const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    vote: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
      ref: "User",
    },
  },

  { timestamps: true }
);
const Post = mongoose.model<Ipost>("Post", PostSchema);

module.exports = Post;