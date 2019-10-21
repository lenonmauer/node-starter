const dotenv = require('dotenv');
const config = dotenv.config();

if (config.error && process.env.NODE_ENV === 'development') {
  throw new Error("Couldn't find .env file");
}

module.exports = {
  env: process.env.NODE_ENV || 'development',

  port: parseInt(process.env.PORT, 10),

  database: {
    url: process.env.DATABASE_URL,
  },

  redis: {
    url: process.env.REDIS_URL,
  },

  jwtSecret: process.env.JWT_SECRET,

  logger: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  api: {
    prefix: '/api',
  },
};
