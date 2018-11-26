require('dotenv').config();
require('newrelic');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const { routerHome, routerAddress } = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(['/homes/:home', '/addresses/:address'],
  express.static(path.resolve(__dirname, '../public')),
);

app.use('/api/homes/:home/images', routerHome);
app.use('/api/addresses/:address/images', routerAddress);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
