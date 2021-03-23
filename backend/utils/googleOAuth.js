const { OAuth2Client } = require('google-auth-library');
const config = require('../config/config');

const client = new OAuth2Client(
  config.google.clientId,
  config.google.clientSecret,
  'postmessage'
);


exports.fetchTokenAndProfile = async (code) => {
  const r = await client.getToken(code);
  const idToken = r.tokens.id_token;

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  return {profile: payload, accessToken: r.tokens.access_token};
};

