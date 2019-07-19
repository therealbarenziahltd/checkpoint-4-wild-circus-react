const User = require('../models').User;

module.exports = {
  index: function (req, res) {
    User.findAll()
      .then((users) => res.json({ users }))
      .catch((err) => res.send(err));
  }
};