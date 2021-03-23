const Router = require('express').Router;

const authController = require('../controllers/auth');

const router = Router();

/**
 * POST /api/auth/google
 */
router.post('/google', authController.googleLogin);


module.exports = router;