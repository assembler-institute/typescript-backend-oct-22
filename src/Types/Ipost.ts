import { array } from "joi";
import { Document } from "mongoose";

export interface Ipost extends Document {
  title: string;
  description: string;
  image: string;
  vote: number;
  author: string;
}
