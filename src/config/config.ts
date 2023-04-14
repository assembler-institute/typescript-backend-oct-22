const dotenv = require('dotenv');

dotenv.config();

const {
  DB_CONNECT,
  SERVER_PORT
} = process.env;

const CONFIG = {
  development: {
    app: {
      port: SERVER_PORT || 'http://localhost:4000',
      frontend: 'http://localhost:5173'
    },
    db: {
      url: DB_CONNECT
    },
  },
  production: {
    app: {
      port: SERVER_PORT || 'http://localhost:4000',
      frontend: 'http://localhost:5173'
    },
    db: {
      url: DB_CONNECT
    }
  }
};

// export default
module.exports = CONFIG;