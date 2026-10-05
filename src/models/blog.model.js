import { model, Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: String,
  author: {
    name: String,
    image: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Blog = model("Blog", blogSchema);
