"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var CONFIG = require("../config/config");
var db_url = CONFIG.development.db.url;
/**
 * connect to the db with connection string as param
 */
function connect() {
    return mongoose_1.default.connect(db_url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
}
module.exports = connect;
