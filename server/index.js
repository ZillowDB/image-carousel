require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const { routerImages, routerHome } = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use((req, res, next) => {
  console.log(`Incoming from ${req.path} and ${req.method}`);
  next();
});

app.use('/homes/:home/images', routerHome);
app.use('/images/:image', routerImages);
app.use('/images', routerImages);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
