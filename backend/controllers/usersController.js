const User = require('../models').User;

module.exports = {
  index: (req, res) => {
    User.scope('withoutPassword').findAll()
      .then((users) => res.json({ users }))
      .catch((err) => res.status(404).send(err));
  },

  show: (req, res) => {
    User.scope('withoutPassword').findByPk(req.params.id)
      .then((user) => user? res.json({ user: user }) : res.status(404).json({error: `User with id ${req.params.id} can't be found.`}))
      .catch((error) => res.status(503).json({ error: 'Service unavailable' }));
  },

  create: (req, res) => {
    User.scope('withoutPassword').create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin || false,
      birthdate: req.body.birthdate
    })
      .then((user) => res.status(201).json({ response: 'User added to database.'}))
      .catch((error) => res.status(404).json({ error }));
  },

  update: (req, res) => {
    User.scope('withoutPassword').findByPk(req.params.id)
      .then((user) => {
        user.update({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          isAdmin: req.body.isAdmin || false,
          birthdate: req.body.birthdate
        })
          .then((user) => res.json({user}))
          .catch((error) => res.json({error}));
      })
      .catch((error) => { res.status(404).json({ error }); });
  },

  delete: (req, res) => {
    User.scope('withoutPassword').findByPk(req.params.id)
      .then((user) => {
        user.destroy()
          .then((user) => { res.json({ response: `User ${user.firstName} ${user.lastName} has been deleted.`}); })
          .catch((error) => res.status(403).json({ error, message: '403 Please contact Admin' }));
      })
      .catch((error) => res.status(404).json({ error: '404 User Not Found' }));
  },
};