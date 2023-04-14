const express = require('express');
import { Request, Response, NextFunction } from "express";
import { PostRouter, UserRouter } from './routes';
const helmet = require('helmet');
const { json } = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const CONFIG = require('./config/config');


const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json(
  {
    limit: '50mb'
  }
));

app.use(cors({
  origin: CONFIG.development.app.frontend
}));

app.use('/user', UserRouter);
app.use('/post', PostRouter);

// 404 response
app.use((error: any, res: Response, next: NextFunction) => {
  try {
    res.status(404).send("Resource not found");
  } catch (error) {
    next(error);
  }
});

app.use((req: Request, error: any, res: Response, next: NextFunction) => {
  try {
    const status = error.status || 500;
    const message =
      error.message ||
      "There was an error while processing your request, please try again";
    return res.status(status).send({
      status,
      message,
    });
  } catch (error) {
    next(error);
  }
});

export default app;