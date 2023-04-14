import mongoose, { Schema } from "mongoose";
import { Iuser } from "../Types/Iuser";
const UserSchema: Schema = new Schema(
  {
    _id: {
      type: String
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      max: 35,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const User = mongoose.model<Iuser>("User", UserSchema);

module.exports = User;