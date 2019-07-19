var express = require('express');
var router = express.Router();
const passport = require('passport');
const pricesController = require('../controllers/pricesController');

//CREATE (public)
// ./auth.js

//CREATE (private)
router.post('/', passport.authenticate('jwt', { session: false }), pricesController.create);

//READ ALL (private)
router.get('/', passport.authenticate('jwt', { session: false }), pricesController.index);

//READ ONE (private)
router.get('/:id', passport.authenticate('jwt', { session: false }), pricesController.show);

//UPDATE (private)
router.put('/:id', passport.authenticate('jwt', { session: false }), pricesController.update);

//DELETE (private)
router.delete('/:id', passport.authenticate('jwt', { session: false }), pricesController.delete);

module.exports = router;
