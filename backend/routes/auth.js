const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();
const passport = require('passport');

/* POST email and password and return jwt if authenticated successfull */
router.post('/signin', passport.authenticate('local', { session: false }), authController.signIn);

/* POST create new user. multer create an object, we can access it with req.avatar */
router.post('/signup', authController.signUp);

module.exports = router;
