var express = require('express');
var router = express.Router();
const passport = require('passport');
const showsController = require('../controllers/showsController');

//CREATE (public)
// ./auth.js

//CREATE (private)
router.post('/', passport.authenticate('jwt', { session: false }), showsController.create);

//READ ALL (private)
router.get('/', passport.authenticate('jwt', { session: false }), showsController.index);

//READ ONE (private)
router.get('/:id', passport.authenticate('jwt', { session: false }), showsController.show);

//UPDATE (private)
router.put('/:id', passport.authenticate('jwt', { session: false }), showsController.update);

//DELETE (private)
router.delete('/:id', passport.authenticate('jwt', { session: false }), showsController.delete);

module.exports = router;
