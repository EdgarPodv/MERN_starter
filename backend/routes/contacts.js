const Router = require('express').Router;

const contactsController = require('../controllers/contacts');

const router = Router();

/**
 * GET /api/contacts/google
 */
router.get('/google', contactsController.googleContacts);


module.exports = router;