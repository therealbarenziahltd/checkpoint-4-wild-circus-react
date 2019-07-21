var express = require('express');
var router = express.Router();
const passport = require('passport');
const commentariesController = require('../controllers/commentariesController');

//CREATE (public)
// ./auth.js

//CREATE (private)
router.post('/', passport.authenticate('jwt', { session: false }), commentariesController.create);

//READ ALL (private)
router.get('/', commentariesController.index);

//READ ONE (private)
router.get('/:id', commentariesController.show);

//UPDATE (private)
router.put('/:id', passport.authenticate('jwt', { session: false }), commentariesController.update);

//DELETE (private)
router.delete('/:id', passport.authenticate('jwt', { session: false }), commentariesController.delete);

module.exports = router;
