const db = require('../database/controller.js');

module.exports.getByHomeId = (req, res) => {
  const id = req.params.home;
  db.getAllImagesById(id)
    .then((results) => {
      const images = results.rows;
      images.forEach((image) => { image.imageUrl = image.image_url; });
      res.status(200).send({ data: results.rows });
    })
    .catch(err => res.status(500).send(err));
};

module.exports.postByHomeId = (req, res) => {
  const id = req.params.home;
  db.postAllImages(id, req.body)
    .then(results => res.status(201).send({ data: results.rows }))
    .catch(err => res.status(500).send(err));
};

module.exports.updateByHomeId = (req, res) => {
  const id = req.params.home;
  db.updateAllImages(id, req.body)
    .then(results => res.status(202).send({ data: results.rows }))
    .catch(err => res.status(500).send(err));
};

module.exports.deleteByHomeId = (req, res) => {
  const id = req.params.home;
  db.deleteAllImages(id)
    .then(results => res.status(200).send({ data: results.rows }))
    .catch(err => res.status(500).send(err));
};

module.exports.getByAddress = (req, res) => {
  const { address } = req.params;
  db.getAllImagesByAddress(address)
    .then((results) => {
      const images = results.rows;
      images.forEach((image) => { image.imageUrl = image.image_url; });
      res.status(200).send({ data: results.rows });
    })
    .catch(err => res.status(500).send(err));
};

module.exports.postByAddress = (req, res) => {
  const { address } = req.params;
  db.postAllImagesByAddress(address, req.body)
    .then(results => res.status(201).send({ data: results.rows }))
    .catch(err => res.status(500).send(err));
};
