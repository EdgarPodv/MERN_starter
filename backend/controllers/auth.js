const messages = require('../constants/messages')
const responseUtil = require('../utils/responses');
const googleOAuth = require('../utils/googleOAuth');

/**
 * Google Login
 */
exports.googleLogin = async (req, res, next) =>{

    try {

        const code = req.body.code;
        const {profile, accessToken} = await googleOAuth.fetchTokenAndProfile(code);

        const user = {
            googleId: profile.sub,
            name: profile.name,
            firstName: profile.given_name,
            lastName: profile.family_name,
            email: profile.email,
            profilePic: profile.picture,
            accessToken: accessToken
        };

        return responseUtil.genericResponse(res, user);

    } catch (error) {
        return responseUtil.genericResponse(res, null, messages.serverError, 'error', 500);
    }
}