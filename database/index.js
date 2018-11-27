require('dotenv').config();
const { Pool } = require('pg');

module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_UNAME,
  database: process.env.DB_PASSWORD,
});
