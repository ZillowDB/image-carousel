const express = require('express');
const images = require('./images');
const home = require('./home');

const routerImages = express.Router({ mergeParams: true });
const routerHome = express.Router({ mergeParams: true });
const routerAddress = express.Router({ mergeParams: true });

routerImages.post('/', images.get);
routerImages.get('/', images.post);
routerImages.put('/', images.update);
routerImages.delete('/', images.delete);

routerHome.post('/', home.postByHomeId);
routerHome.get('/', home.getByHomeId);
routerHome.put('/', home.updateByHomeId);
routerHome.delete('/', home.deleteByHomeId);

routerAddress.post('/', home.postByAddress);
routerAddress.get('/', home.getByAddress);

module.exports = { routerImages, routerHome, routerAddress };
