/* eslint no-undef: 0 */
const jwt = require('jsonwebtoken');
const User = require('../models').User;

module.exports = {
  signIn: function (req, res) {
    /* By default passport save authenticated user in req.user object */
    const user = {
      id: req.user.id,
      email: req.user.email,
      isAdmin: req.user.isAdmin
    };
    /* Signin jwt with your SECRET key */
    const token = jwt.sign(user, process.env.JWT_SECRET);
    /* Return user and token in json response */
    res.json({ user, token });
  },
  signUp: function (req, res) {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      birthdate: req.body.birthdate || new Date(),
      isAdmin: req.body.isAdmin || false
    })
      .then((user) => {
        /* Signin jwt with your SECRET key */
        const token = jwt.sign(user.dataValues, process.env.JWT_SECRET);
        /* Return user and token in json response */
        res.json({ user, token });
      })
      .catch((err) => {
        res.status(503).json(err);
        console.log(err);
      });
  }
};