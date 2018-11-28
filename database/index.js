require('dotenv').config();
const { Pool } = require('pg');

module.exports = new Pool({
  user: process.env.DB_UNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
});
