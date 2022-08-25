import User from "../model/User";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();

  if (!users) {
    res.status(404);
    throw new Error("Users not found");
  }

  return res.status(200).json({ users });
});

// @desc    create new user
// @route   POST /api/user/register
// @access  Public

export const registerUser = asyncHandler(async (req, res, next) => {
  const { fullName, userName, email, password, image } = req.body;

  if (!fullName || !userName || !email || !password) {
    throw new Error("Please provide a firstName, lastName, email and password");
  }

  // check if user exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("User already exists, Please login");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create new user
  const user = await User.create({
    fullName,
    userName,
    email,
    password: hashedPassword,
    image,
    posts: [],
  });

  if (user) {
    res.status(200).json({
      id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
      image: user.image,
      posts: user.posts,
      msg: "User created successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc   login in user
// @route   POST /api/users
// @access  Private

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // find user;

  const existingUser = await User.findOne({ email });

  if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
    res.json({
      _id: existingUser._id,
      fullName: existingUser.fullName,
      userName: existingUser.userName,
      email: existingUser.email,
      image: existingUser.image,
      msg: "User logged in successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
