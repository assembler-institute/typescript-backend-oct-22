import Joi from "joi";

export const PostValidation = Joi.object({
  title: Joi.string().min(6).required(),
  description: Joi.string().min(6).required(),
  image: Joi.string().required(),
  vote: Joi.number().required(),
});

export const PostIdValidation = Joi.string().alphanum().required();

export const UpdatePostValidation = Joi.object({
  title: Joi.string().min(6).required(),
  description: Joi.string().min(6).required(),
  image: Joi.string().required(),
  vote: Joi.number().required(),
  postId: Joi.string().alphanum().required(),
});