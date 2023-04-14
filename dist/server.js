"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var routes_1 = require("./routes");
var helmet = require('helmet');
var json = require('body-parser').json;
var morgan = require('morgan');
var cors = require('cors');
var CONFIG = require('./config/config');
var app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(json({
    limit: '50mb'
}));
app.use(cors({
    origin: CONFIG.development.app.frontend
}));
app.use('/user', routes_1.UserRouter);
app.use('/post', routes_1.PostRouter);
// 404 response
app.use(function (error, res, next) {
    try {
        res.status(404).send("Resource not found");
    }
    catch (error) {
        next(error);
    }
});
app.use(function (req, error, res, next) {
    try {
        var status_1 = error.status || 500;
        var message = error.message ||
            "There was an error while processing your request, please try again";
        return res.status(status_1).send({
            status: status_1,
            message: message,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = app;
