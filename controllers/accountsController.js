const db = require('../models');

module.exports = {
  getMessage: function(req, res) {
    console.log(req.params);
    db.Message.find({
      $or: [
        { msgTo: req.params.user2, msgFrom: req.params.user1 },
        { msgTo: req.params.user1, msgFrom: req.params.user2 }
      ]
    })
      .then(dbMessages => res.json(dbMessages))
      .catch(err => console.log(err));
  },
  postMessage: function(req, res) {
    // post messages
    console.log(req.body);
    db.Message.create(req.body)
      .then(dbMessage => res.json(dbMessage))
      .catch(err => console.log(err));
  },
  deleteMessage: function(req, res) {
    db.Message.findByIdAndDelete(req.params.id)
      .then(dbMessage => res.send('Message deleted.'))
      .catch(err => console.log(err));
  },
  editMessage: function(req, res) {
    console.log(req.params.id, req.body);
    db.Message.findByIdAndUpdate(req.params.id, req.body)
      .then(dbUpdate => res.send('Message updated!'))
      .catch(err => console.log(err));
  }
};
