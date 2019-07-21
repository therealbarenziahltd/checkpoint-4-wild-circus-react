var express = require('express');
var router = express.Router();
const passport = require('passport');
const picturesController = require('../controllers/picturesController');

//CREATE (public)
// ./auth.js

//CREATE (private)
router.post('/', passport.authenticate('jwt', { session: false }), picturesController.create);

//READ ALL (private)
router.get('/', picturesController.index);

//READ ONE (private)
router.get('/:id', picturesController.show);

//UPDATE (private)
router.put('/:id', passport.authenticate('jwt', { session: false }), picturesController.update);

//DELETE (private)
router.delete('/:id', passport.authenticate('jwt', { session: false }), picturesController.delete);

module.exports = router;
