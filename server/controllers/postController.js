import Post from "../model/Post";
import User from "../model/User";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

// @desc    get all posts
// @route   GET /api/posts
// @access  Public

export const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("user");

  if (!posts) {
    return res.status(404).json({ msg: "blogs not found" });
  }

  return res.status(200).json({ posts });
});

// @desc get one id
// @route GET /api/posts/:id
// @access private

export const getOnePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  return res.status(200).json({ post });
});

// @desc    create new post
// @route   POST /api/posts
// @access  Private
export const createPost = asyncHandler(async (req, res) => {
  const { title, description, image, user } = req.body;

  let exisitingUser = await User.findById(user);

  if (!exisitingUser) {
    res.status(400);
    throw new Error("User does not exist");
  }

  if (!title || !description || !image || !user) {
    throw new Error("Please provide all fields");
  }

  const post = await Post.create({
    title,
    description,
    image,
    user,
  });

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await post.save({ session });
    exisitingUser.posts.push(post);
    await exisitingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    await session.abortTransaction();
    throw new Error("Error creating post");
  }

  res.status(200).json({ post });
});

// @desc    update post
// @route   PUT /api/posts/:id
// @access  Private

export const updatePost = asyncHandler(async (req, res) => {
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

// @desc    delete post
// @route   DELETE /api/posts/:id
// @access  Private

export const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findByIdAndRemove(id).populate("user");
  await post.user.posts.pull(post);
  await post.user.save();

  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  res.status(200).json({ msg: "Post deleted successfully" });
});

// @desc    get all posts by user
// @route   GET /api/posts/user/:id
// @access  Private

export const getUserPosts = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const userPosts = await User.findById(id).populate("posts");

  if (!userPosts) {
    res.status(404);
    throw new Error("User not found");
  }

  if (!userPosts.posts.length) {
    res.status(404);
    throw new Error("User has no posts");
  }

  return res.status(200).json({ user: userPosts });
});
