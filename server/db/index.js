const {
  HOST,
  USER,
  DATABASE,
  PASS,
} = require('dotenv').config().parsed;

const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASS,
  database: DATABASE,
}, () => `Connected to SQL db as ${USER}..`);