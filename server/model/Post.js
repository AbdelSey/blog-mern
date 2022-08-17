import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User", // collection name
    required: [true, "User is required"],
  },
});

export default mongoose.model("Post", postSchema);
