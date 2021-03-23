const messages = require('../constants/messages')
const responseUtil = require('../utils/responses');
const googleContacts = require('../utils/googleContacts');

/**
 * Google Contacts
 */
exports.googleContacts = async (req, res, next) =>{

    try {

        const token = req.headers.authorization.replace('Bearer ', '');
        const contacts = await googleContacts.fetchContacts(token);
        
        if  (!contacts)
            return responseUtil.genericResponse(res, null, messages.dataNotAvailable, 'error', 404);

        return responseUtil.genericResponse(res, contacts);

    } catch (error) {
        return responseUtil.genericResponse(res, null, messages.serverError, 'error', 500);
    }
}