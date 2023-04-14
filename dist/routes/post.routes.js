"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
var express_1 = require("express");
var PostRouter = (0, express_1.Router)();
exports.PostRouter = PostRouter;
var postController = require('../controllers').postController;
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
