const model = require('./model');

module.exports = {
  createData: (req, res) => {
    const { title } = req.body;
    const data = [title];
    const query = 'INSERT INTO movies (hasSeen, title) VALUES (0, ?)';
    model.createData(query, data, (err, result) => {
      if (err) res.sendStatus(500);
      if (!err) res.sendStatus(201);
    });
  },
  readData: (req, res) => {
    const query = 'SELECT * FROM movies';
    model.readData(query, (err, result) => {
      if (err) res.sendStatus(500);
      if (!err) res.send(result).status(200);
    });
  },
  updateData: (req, res) => {
    const { id, title, hasSeen } = req.body;
    console.log('updating:', id, title, hasSeen);
    const data = [title, hasSeen, id];
    const query = 'UPDATE movies SET title = ?, hasSeen = ? WHERE id = ?';
    model.updateData(query, data, (err, result) => {
      if (err) {
        console.log('err', err);
        res.sendStatus(500);
      }
      if (!err) res.sendStatus(203);
    });
  },
  deleteData: (req, res) => {
    const { id } = req.body;
    const data = [id];
    const query = 'DELETE from movies WHERE id = ?';
    model.deleteData(query, data, (err, result) => {
      if (err) {
        console.log('err', err);
        res.sendStatus(500);
      }
      if (!err) res.sendStatus(204);
    });
  },
};
