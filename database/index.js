require('dotenv').config();
const mysql = require('promise-mysql');

module.exports = mysql.createPool({
  host: process.env.DB_DOST,
  user: process.env.DB_UNAME,
  database: process.env.DB_PASSWORD,
});
