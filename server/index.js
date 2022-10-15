const express = require('express');
const path = require('path');
const {
  createData,
  readData,
  updateData,
  deleteData,
 } = require('./controller');
const env = require('dotenv').config().parsed;

// CONSTANTS
const app = express();
const PORT = env.PORT || 3000;
const HOST = env.HOST || 'localhost';

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.post('/movie/post', createData);
app.get('/movies', readData);
app.patch('/movie/patch', updateData);
app.delete('/movie/delete', deleteData);

// EVENT
app.listen(PORT, () => `Running at http://${env.HOST}:${PORT}`);
