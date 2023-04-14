"use strict";
var dotenv = require('dotenv');
dotenv.config();
var _a = process.env, DB_CONNECT = _a.DB_CONNECT, PORT = _a.PORT;
var CONFIG = {
    development: {
        app: {
            port: PORT || 'http://localhost:4000',
            frontend: 'http://localhost:5173'
        },
        db: {
            url: DB_CONNECT
        },
    },
    production: {
        app: {
            port: PORT || 'http://localhost:4000',
            frontend: 'http://localhost:5173'
        },
        db: {
            url: DB_CONNECT
        }
    }
};
// export default
module.exports = CONFIG;
