const jwt = require('jsonwebtoken');
const config = require('../config/config');

/**
 * Generate access token.
 */
exports.generateAccessToken = (data) => {
  return jwt.sign(
    { data: data },
    config.auth.accessTokenSecret,
    { expiresIn: config.auth.accessTokenDuration }
  );
}

/**
 * Verify access token
 */
exports.verifyAccessToken = (token) => {
  
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.auth.accessTokenSecret, (error, decoded) => {
      if (error) 
        reject(error);

      resolve(decoded);
    });
  });
}