import { Blog } from "../models/blog.model.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (!blogs) {
      return res.status(404).json({
        message: "Blog",
      });
    }

    res.status(200).json({
      message: "All blogs are: ",
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Fatch blogs",
      error: error.message,
    });
  }
};

export const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Your Bloge",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Fatch blogs",
      error: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.log("UPDATE BLOG ERROR:", error);

    return res.status(500).json({
      message: "Failed to update blog",
      error: error.message,
    });
  }
};

export const addNewBlog = async (req, res) => {
  const { author, title, description } = req.body;

  if (!author || !author.name || !author.image || !title || !description) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const blog = await Blog.create({
      author,
      title,
      description,
    });

    return res.status(201).json({
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create blog",
      error: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to Delete blog",
      error: error.message,
    });
  }
};
