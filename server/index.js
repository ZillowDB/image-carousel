require('dotenv').config();
require('newrelic');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const { routerHome } = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   console.log(`Incoming from ${req.path} and ${req.method}`);
//   next();
// });

// Static files
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/homes/:home', express.static(path.resolve(__dirname, '../public')));

app.use('/homes/:home/images', routerHome);
app.use('/addresses/:address/images', routerHome);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
