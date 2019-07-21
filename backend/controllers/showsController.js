const Show = require('../models').Show;

module.exports = {
  index: (req, res) => {
    Show.findAll({ include: { all: true, nested: true } })
      .then((shows) => res.json({ shows }))
      .catch((err) => res.status(404).send(err));
  },

  show: (req, res) => {
    Show.findByPk(req.params.id)
      .then((show) => show? res.json({ show: show }) : res.status(404).json({error: `Show with id ${req.params.id} can't be found.`}))
      .catch((error) => res.status(503).json({ error, message: 'Service unavailable' }));
  },

  create: (req, res) => {
    Show.create({
      city: req.body.city || '',
      date: req.body.date || new Date(),
      priceId: req.body.priceId || 1, 
    })
      .then(() => res.status(201).json({ response: 'Show added to database.'}))
      .catch((error) => res.status(404).json({ error }));
  },

  update: (req, res) => {
    Show.findByPk(req.params.id)
      .then((show) => {
        show.update({
          city: req.body.city,
          date: req.body.date,
          priceId: req.body.priceId, 
        })
          .then((show) => res.json({show}))
          .catch((error) => res.json({error}));
      })
      .catch((error) => { res.status(404).json({ error }); });
  },

  delete: (req, res) => {
    Show.findByPk(req.params.id)
      .then((show) => {
        show.destroy()
          .then((show) => { res.json({ response: `Show ${show.firstName} ${show.lastName} has been deleted.`}); })
          .catch((error) => res.status(403).json({ error, message: '403 Please contact Admin' }));
      })
      .catch((error) => res.status(404).json({ error, message: '404 Show Not Found' }));
  },
};