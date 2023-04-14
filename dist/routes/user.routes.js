"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
var express_1 = require("express");
var UserRouter = (0, express_1.Router)();
exports.UserRouter = UserRouter;
var userController = require('../controllers').userController;
//create user
UserRouter.post("/", userController.createUser);
//get user
UserRouter.get("/:userId", userController.getUser);
//update user
UserRouter.patch("/", userController.updateUser);
