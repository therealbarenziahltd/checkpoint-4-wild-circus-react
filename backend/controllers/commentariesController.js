const Commentary = require('../models').Commentary;

module.exports = {
  index: (req, res) => {
    Commentary.findAll()
      .then((commentaries) => { res.json({ commentaries }); })
      .catch((error) => res.status(500).json({ error }));
  },

  show: (req, res) => {
    Commentary.findByPk(req.params.id)
      .then((commentary) => { res.json({ commentary }); })
      .catch((error) => res.status(500).json({ error }));
  },

  create: (req, res) => {
    Commentary.create({
      userId: req.body.userId || 1, 
      content: req.body.content || ''
    })
      .then((commentaries) => { res.json({ commentaries }); })
      .catch((error) => res.status(500).json({ error: error.errors[0].message }));
  },

  update: (req, res) => {
    Commentary.findByPk(req.params.id)
      .then((commentary) => {
        commentary.update({
          userId: req.body.userId || 1, 
          content: req.body.content || ''
        })
          .then((updatedCommentary) => { res.json({ updatedCommentary }); })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  },

  delete: (req, res) => {
    Commentary.findByPk(req.params.id)
      .then((commentary) => {
        commentary.destroy()
          .then(() => { res.json({ message: 'Commentary has been deleted !' }); })
          .catch((error) => res.status(500).json({ error }));

      })
      .catch(() => res.status(404).json({ message: `Commentary with id ${req.params.id} was not found` }));
  }
};