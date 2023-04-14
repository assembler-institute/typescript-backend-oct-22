const dotenv = require('dotenv');

dotenv.config();

const {
  DB_CONNECT,
  PORT
} = process.env;

const CONFIG = {
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