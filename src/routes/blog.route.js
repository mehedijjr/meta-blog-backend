import express from "express";
import {
  addNewBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../controllers/blog.controller.js";

export const router = express.Router();

router.get("/all-blogs", getAllBlogs);
router.get("/blog/:id", getBlogById);
router.post("/add-blog", addNewBlog);
router.put("/blogs/edit/:id", updateBlog);
router.delete("/delete-blog/:id", deleteBlog);
