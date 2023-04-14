const { User } = require("../Models/User");
import { Iuser } from "../Types/Iuser";
import createError from "http-errors";
import { Request, Response, NextFunction } from "express";
import {
  UserValidation,
  UserIdValidation,
} from "../Validations/UserValidation";

/**
 * Update user
 * @param userId
 * @param userModelValidation
 */
const processUpdateUser = async (
  userId: String,
  userModelValidation: Iuser
) => {
  try {
    const updateUser = await User.updateOne(
      {
        _id: userId,
      },
      {
        $set: {
          name: userModelValidation.name,
          surname: userModelValidation.surname,
        },
      }
    );
    return updateUser;
  } catch (error) {
    console.log(error);
  }
};
/**
 * add new user
 * @param userModelValidation
 */
const addUser = async (userModelValidation: Iuser) => {
  try {
    const user = new User({
      username: userModelValidation.username,
      name: userModelValidation.name,
      surname: userModelValidation.surname,
    });
    const savedUser = await user.save();

    return savedUser;
  } catch (error) {
    throw new createError.BadRequest("Bad request.");
  }
};

const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userModelValidation: Iuser = await UserValidation.validateAsync(
      req.body
    );

    if (!userModelValidation.username) { return "Operation failed, invalid details provided." }

    const isUsernameAvailable = await User.findOne({
      username: userModelValidation.username,
    });

    console.log(isUsernameAvailable);


    if (isUsernameAvailable) {
      return res.status(400).json({
        message: "Username already exists.",
      });
    }

    const savedUser = await addUser(userModelValidation);

    if (!savedUser) {
      return next(
        res.status(400).json({
          message: "Operation failed, invalid details provided.",
        })
      );
    }

    return res.status(200).json({
      message: "User created successfully.",
      data: savedUser,
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

const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userIdValidation = await UserIdValidation.validateAsync(
      req.params.userId
    );

    if (!userIdValidation) {
      res.status(400).json({
        message: "Operation failed, invalid details provided.",
      });
    }

    const userDetails = await User.findById(userIdValidation);
    console.log(userDetails);


    if (!userDetails) {
      res.status(404).json({
        message: `User id not available`,
      });
    }

    return res.status(200).json({
      message: "User details",
      data: userDetails,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: "Invalid details provided.",
      });
    }
    next(error);
  }
};

const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userModelValidation: Iuser = await UserValidation.validateAsync(
      req.body
    );

    if (!userModelValidation) {
      return next(
        new createError.BadRequest(
          "Operation failed, invalid details provided."
        )
      );
    }

    const isUsernameValid = await User.findOne({
      username: userModelValidation.username,
    });

    if (!isUsernameValid) {
      return res.status(404).json({
        message: `Username ${userModelValidation.username} not valid`,
      });
    }

    const updatedUser = await processUpdateUser(
      isUsernameValid._id,
      userModelValidation
    );

    if (updatedUser) {
      return res.status(201).json({
        updatedUser,
      });
    }

    return next(
      res.status(400).json({
        message: "Invalid details provided.",
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
  createUser,
  updateUser,
  getUser,
};