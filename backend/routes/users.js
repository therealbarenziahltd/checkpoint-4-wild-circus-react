var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controllers/usersController');

//CREATE (public)
// ./auth.js

//CREATE (private)
router.post('/', passport.authenticate('jwt', { session: false }), userController.create);

//READ ALL (private)
router.get('/', passport.authenticate('jwt', { session: false }), userController.index);

//READ ONE (private)
router.get('/:id', passport.authenticate('jwt', { session: false }), userController.show);

//UPDATE (private)
router.put('/:id', passport.authenticate('jwt', { session: false }), userController.update);

//DELETE (private)
router.delete('/:id', passport.authenticate('jwt', { session: false }), userController.delete);

module.exports = router;
