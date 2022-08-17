import express from "express";
const postRouter = express.Router();
import {
  createPost,
  getAllPosts,
  updatePost,
  getOnePost,
  getUserPosts,
  deletePost,
} from "../controllers/postController";

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getOnePost);
postRouter.post("/create", createPost);
postRouter.put("/update/:id", updatePost);
postRouter.get("/user/:id", getUserPosts);
postRouter.delete("/:id", deletePost);

export default postRouter;
