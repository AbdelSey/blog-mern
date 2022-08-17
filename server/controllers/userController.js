import User from "../model/User";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();

  if (!users) {
    return res.status(404).json({ msg: "no users found" });
  }

  return res.status(200).json({ users });
});

// @desc    create new user
// @route   POST /api/users
// @access  Public

export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please provide all fields");
  }

  // check if user exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  //  if there is a user

  if (user) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      msg: "user created successfully",
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
      name: existingUser.name,
      email: existingUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
