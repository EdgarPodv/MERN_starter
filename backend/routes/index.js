const Router = require('express').Router;
const authRoute = require('./auth');
const contactsRoute = require('./contacts');
const calendarsRoute = require('./calendars');

const router = Router();

router.use('/api/auth', authRoute);
router.use('/api/contacts', contactsRoute);
router.use('/api/calendars', calendarsRoute);

module.exports = router;

