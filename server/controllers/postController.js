import Post from "../model/Post";
import asyncHandler from "express-async-handler";

// @desc    get all posts
// @route   GET /api/posts
// @access  Public

export const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();

  if (!posts) {
    return res.status(404).json({ msg: "blogs not found" });
  }

  return res.status(200).json({ posts });
});

// @desc get one id
// @route GET /api/posts/:id
// @access private

export const getOnePost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findbyId(id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  return res.status(200).json({ post });
});

// @desc    create new post
// @route   POST /api/posts
// @access  Private
export const createPost = asyncHandler(async (req, res, next) => {
  const { title, description, image, user } = req.body;

  if (!title || !description || !image || !user) {
    throw new Error("Please provide all fields");
  }

  const post = await Post.create({
    title,
    description,
    image,
    user,
  });

  res.status(200).json({ post });
});

// @desc    update post
// @route   PUT /api/posts/:id
// @access  Private

export const updatePost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const post = await Post.findByIdAndUpdate(
    id,
    {
      title,
      description,
    },
    {
      new: true,
    }
  );

  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  return res.status(200).json({ post });
});
