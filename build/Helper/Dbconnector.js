"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
/**
 * connect to the db with connection string as param
 */
exports.default = (function (database) {
    var connect = function () {
        mongoose_1.default
            .connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
            .then(function () {
            return console.info("Successfully connected to ".concat(database));
        })
            .catch(function (error) {
            console.error("Error connecting to database: ", error);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
});
