const Picture = require('../models').Picture;

module.exports = {
  index: (req, res) => {
    Picture.findAll({})
      .then((pictures) => { res.json({ pictures }); })
      .catch((error) => res.status(500).json({ error }));
  },

  show: (req, res) => {
    Picture.findByPk(req.params.id)
      .then((picture) => { res.json({ picture }); })
      .catch((error) => res.status(500).json({ error }));
  },

  create: (req, res) => {
    Picture.create({
      showId: req.body.showId || 1,
      url: req.body.url || '', 
    })
      .then((pictures) => { res.json({ pictures }); })
      .catch((error) => res.status(500).json({ error: error.errors[0].message }));
  },

  update: (req, res) => {
    Picture.findByPk(req.params.id)
      .then((picture) => {
        picture.update({
          showId: req.body.showId,
          url: req.body.url,  
        })
          .then((updatedPicture) => { res.json({ updatedPicture }); })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  },

  delete: (req, res) => {
    Picture.findByPk(req.params.id)
      .then((picture) => {
        picture.destroy()
          .then(() => { res.json({ message: 'Picture has been deleted !' }); })
          .catch((error) => res.status(500).json({ error }));

      })
      .catch(() => res.status(404).json({ message: `Picture with id ${req.params.id} was not found` }));
  }
};