const messages = require('../constants/messages')
const responseUtil = require('../utils/responses');
const googleCalendars = require('../utils/googleCalendars');

/**
 * Google Contacts
 */
exports.sendGoogleInvite = async (req, res, next) =>{

    try {

        const token = req.headers.authorization.replace('Bearer ', '');
        const email = req.body.email;
        
        const invite = await googleCalendars.sendInvite(token, email);

        if (!invite)
            return responseUtil.genericResponse(res, null, messages.inviteNotSent, 'error', 400);

        return responseUtil.genericResponse(res, email, messages.inviteSent);

    } catch (error) {
        return responseUtil.genericResponse(res, null, messages.serverError, 'error', 500);
    }
}