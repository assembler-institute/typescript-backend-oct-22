import { Router } from "express";
const UserRouter: Router = Router();

const { userController } = require('../controllers');

//create user
UserRouter.post("/", userController.createUser);

//get user
UserRouter.get("/:userId", userController.getUser);

//update user
UserRouter.patch("/", userController.updateUser);

export {
  UserRouter,
}