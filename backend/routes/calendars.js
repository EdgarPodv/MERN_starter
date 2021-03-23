const Router = require('express').Router;

const calendarsController = require('../controllers/calendars');

const router = Router();

/**
 * GET /api/calendars/sendGoogleInvite
 */
router.post('/sendGoogleInvite', calendarsController.sendGoogleInvite);


module.exports = router;