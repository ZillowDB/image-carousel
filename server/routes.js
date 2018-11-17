const express = require('express');
const images = require('./images');
const home = require('./home');

const routerImages = express.Router();
const routerHome = express.Router();

routerImages.post('/images', images.get);
routerImages.get('/images/:image', images.post);
routerImages.put('/images/:image', images.update);
routerImages.delete('/images/:image', images.delete);

routerHome.post('/homes/:home/images', home.postByHomeId);
routerHome.get('/homes/:home/images', home.getByHomeId);
routerHome.put('/homes/:home/images', home.updateByHomeId);
routerHome.delete('/homes/:home/images', home.deleteByHomeId);

module.exports = { routerImages, routerHome };
