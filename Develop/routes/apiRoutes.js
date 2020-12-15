var notesData = require('../data/noteInfo');

// routing

module.exports = function (app) {
  // get
  app.get('/api/notes', function (req, res) {
    res.json(noteInfo);
  });

  //   post
  app.post('/api/notes', function (req, res) {});

  //   delete
  app.delete('/api/notes/:id', function (req, res) {});
};
