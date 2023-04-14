"use strict";
var dotenv = require('dotenv');
dotenv.config();
var _a = process.env, DB_CONNECT = _a.DB_CONNECT, SERVER_PORT = _a.SERVER_PORT;
var CONFIG = {
    development: {
        app: {
            port: SERVER_PORT || 'http://localhost:4000'
        },
        db: {
            url: DB_CONNECT
        },
    },
    production: {
        app: {
            port: SERVER_PORT || 'http://localhost:4000'
        },
        db: {
            url: DB_CONNECT
        }
    }
};
// export default
module.exports = CONFIG;
