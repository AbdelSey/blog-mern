import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  userName: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already in use"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  image: {
    type: String,
    optional: true,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Post",
      required: [true, "User is required"],
    },
  ],
});

export default mongoose.model("User", userSchema);

// User will be users due to mongoDB naming convention.
