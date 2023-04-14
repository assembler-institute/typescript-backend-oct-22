import { Request, Response, NextFunction } from "express";
import { Ipost } from "../Types/Ipost";
import { PostValidation } from "../Validations/PostValidation";
const { Post } = require("../Models");

import {
  PostIdValidation,
  UpdatePostValidation,
} from "../Validations/PostValidation";
import { IUpadatePost } from "../Types/IUpadatePost";


const addPost = async (postModelValidation: Ipost) => {
  try {
    const post = new Post({
      title: postModelValidation.title,
      description: postModelValidation.description,
      image: postModelValidation.image,
      vote: postModelValidation.vote,
      author: postModelValidation.author,
    });
    const savedPost = await post.save();

    return savedPost;
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postModelValidation: Ipost = await PostValidation.validateAsync(
      req.body
    );

    if (!postModelValidation) {
      return next(
        res.status(400).json({
          message: "Invalid details provided.",
        })
      );
    }

    const newPost = await addPost(postModelValidation);

    if (newPost) {
      return res.status(201).json({
        message: "Post created successfully",
        data: newPost,
      });
    }

    if (!newPost) {
      return next(
        res.status(400).json({
          message: "Invalid details provided.",
        })
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return next(
        res.status(400).json({
          message: "Invalid details provided.",
        })
      );
    }
    next(error);
  }
};


const getAllPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getPosts = await Post.find()
      .select("_id title description image vote createdAt updatedAt")
      .populate("user", "username name surname");

    if (getPosts) {
      return res.status(200).json({
        message: "Posts fetched successfully",
        data: getPosts,
      });
    }
    return next(
      res.status(404).json({
        message: "Not found.",
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      return next(
        res.status(400).json({
          message: "Invalid details provided.",
        })
      );
    }
    next(error);
  }
};


const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postIdValidation = await PostIdValidation.validateAsync(
      req.params.postId
    );

    if (!postIdValidation) {
      return res.status(400).json({
        message: "Operation failed, invalid details provided.",
      });
    }

    const getPosts = await Post.findById(postIdValidation)
      .select("_id title description image vote createdAt updatedAt")
      .populate("user", "username name surname");

    if (getPosts) {
      return res.status(200).json({
        message: "Post fetched successfully",
        data: getPosts,
      });
    }

    return res.status(404).json({
      message: "Not found.",
    });
  } catch (error) {
    if (error instanceof Error) {
      return next(
        res.status(400).json({
          message: "Invalid details provided.",
        })
      );
    }
    next(error);
  }
};

const detelePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postIdValidation = await PostIdValidation.validateAsync(
      req.params.postId
    );

    if (!postIdValidation) {
      return next(
        res.status(400).json({
          message: "Operation failed, invalid details provided.",
        })
      );
    }

    const deletePosts = await Post.findByIdAndDelete(postIdValidation);

    if (deletePosts) {
      res.status(200).json({
        message: "Post deleted successfully",
        data: deletePosts,
      });
    }
    return next(
      res.status(404).json({
        message: "Not found.",
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      return next(
        res.status(400).json({
          message: "Invalid details provided.",
        })
      );
    }
    next(error);
  }
};

const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resUpdatePostValidation: IUpadatePost = await UpdatePostValidation.validateAsync(
      req.body
    );

    if (!UpdatePostValidation) {
      return next(
        res.status(400).json({
          message: "Operation failed, invalid details provided.",
        })
      );
    }

    const updatedPosts = await Post.findByIdAndUpdate(
      {
        _id: resUpdatePostValidation.postId,
      },
      {
        $set: {
          title: resUpdatePostValidation.title,
          description: resUpdatePostValidation.description,
          image: resUpdatePostValidation.image,
        },
      }
    );

    if (updatedPosts) {
      return res.status(200).json({
        message: "Post updated successfully",
        data: updatedPosts,
      });
    }

    return next(
      res.status(404).json({
        message: "Not found.",
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      return next(
        res.status(400).json({
          message: "Invalid details provided.",
        })
      );
    }
    next(error);
  }
};

module.exports = {
  addPost,
  createPost,
  getAllPost,
  getPost,
  updatePost,
  detelePost,
}