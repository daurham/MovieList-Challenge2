const db = require('./db');

module.exports = {
  createData: (queryString, data, cb) => db.query(queryString, data, cb),
  readData: (queryString, cb) => db.query(queryString, cb),
  updateData: (queryString, data, cb) => db.query(queryString, data, cb),
  deleteData: (queryString, data, cb) => db.query(queryString, data, cb),
};
