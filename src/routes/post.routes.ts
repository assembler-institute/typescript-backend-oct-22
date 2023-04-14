import { Router } from "express";
const PostRouter: Router = Router();

const { postController } = require('../controllers');

//create post
PostRouter.post("/", postController.createPost);

//get all post
PostRouter.get("/", postController.getAllPost);

//get one post
PostRouter.get("/:postId", postController.getPost);

//update post
PostRouter.patch("/", postController.updatePost);

//delete post
PostRouter.delete("/:postId", postController.detelePost);

export {
  PostRouter,
}