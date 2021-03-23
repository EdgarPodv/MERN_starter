const dotenv = require('dotenv');
dotenv.config();
const config = {
  app: {
    port: process.env.APP_PORT || 80,
    host: process.env.APP_HOST || '0.0.0.0',
    baseUrl: process.env.APP_BASEURL
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLEINT_SECRET
  },
  auth: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    accessTokenDuration: process.env.ACCESS_TOKEN_DURATION,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    refreshTokenDuration: process.env.REFRESH_TOKEN_DURATION
  }
};

module.exports = config;
