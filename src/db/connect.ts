import mongoose from "mongoose";
const CONFIG = require("../config/config");

const db_url = CONFIG.development.db.url;

/**
 * connect to the db with connection string as param
 */
function connect() {
  return mongoose.connect(db_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

module.exports = connect;