const Price = require('../models').Price;

module.exports = {
  index: (req, res) => {
    Price.findAll({})
      .then((prices) => { res.json({ prices }); })
      .catch((error) => res.status(500).json({ error }));
  },

  show: (req, res) => {
    Price.findByPk(req.params.id)
      .then((price) => { res.json({ price }); })
      .catch((error) => res.status(500).json({ error }));
  },

  create: (req, res) => {
    Price.create({
      child: req.body.child || 0, 
      adult: req.body.adult || 0, 
      group: req.body.group || 0, 
      school: req.body.school || 0, 
    })
      .then((prices) => { res.json({ prices }); })
      .catch((error) => res.status(500).json({ error: error.errors[0].message }));
  },

  update: (req, res) => {
    Price.findByPk(req.params.id)
      .then((price) => {
        price.update({
          child: req.body.child, 
          adult: req.body.adult, 
          group: req.body.group, 
          school: req.body.school, 
        })
          .then((updatedPrice) => { res.json({ updatedPrice }); })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  },

  delete: (req, res) => {
    Price.findByPk(req.params.id)
      .then((price) => {
        price.destroy()
          .then(() => { res.json({ message: 'Price has been deleted !' }); })
          .catch((error) => res.status(500).json({ error }));

      })
      .catch(() => res.status(404).json({ message: `Price with id ${req.params.id} was not found` }));
  }
};