const db = require('../database/index.js');

module.exports.get = (req, res) => {
  const id = req.params.image;
  db.getImage(id)
    .then(results => res.status(200).send({ data: results }))
    .catch(err => res.status(500).send(err));
};

module.exports.post = (req, res) => {
  db.addImage(req.body)
    .then(results => res.status(201).send({ data: results }))
    .catch(err => res.status(500).send(err));
};

module.exports.update = (req, res) => {
  const id = req.params.image;
  db.updateImage({ id, ...req.body })
    .then(results => res.status(202).send({ data: results }))
    .catch(err => res.status(500).send(err));
};

module.exports.delete = (req, res) => {
  const id = req.params.image;
  db.deleteImage(id)
    .then(results => res.status(200).send({ data: results }))
    .catch(err => res.status(500).send(err));
};
