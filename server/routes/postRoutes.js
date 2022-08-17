import express from "express";
const postRouter = express.Router();
import {
  createPost,
  getAllPosts,
  updatePost,
  getOnePost,
} from "../controllers/postController";

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getOnePost);
postRouter.post("/create", createPost);
postRouter.put("/update/:id", updatePost);

export default postRouter;
