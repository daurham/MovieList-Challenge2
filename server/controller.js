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
      if (!err) res.send(result).Status(200);
    });
  },
  updateData: (req, res) => {
    const { id, title, hasSeen } = req.body;
    const data = [title, hasSeen, id];
    const query = 'UPDATE movies SET title = ?, SET hasSeen = ? WHERE id = ?';
    model.updateData(query, data, (err, result) => {
      if (err) res.sendStatus(500);
      if (!err) res.sendStatus(203);
    });
  },
  deleteData: (req, res) => {
    const { id } = req.body;
    const data = [id];
    const query = 'DELETE movies WHERE id = ?';
    model.deleteData(query, data, (err, result) => {
      if (err) res.sendStatus(500);
      if (!err) res.sendStatus(204);
    });
  },
};
