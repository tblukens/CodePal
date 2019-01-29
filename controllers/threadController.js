const db = require('../models');

const target = db.ForumThread;

module.exports = {
  showAllThreads: function(req, res) {
    target
      .find({})
      .then(dbThreads => res.json(dbThreads))
      .catch(err => console.log(err));
  },
  createThread: function(req, res) {
    target
      .create(req.body)
      .then(dbThread => res.json(dbThread))
      .catch(err => console.log(err));
  },
  deleteThread: function(req, res) {
    target
      .findByIdAndDelete(req.params.id)
      .then(dbThread => res.json(dbThread))
      .catch(err => console.log(err));
  },
  editThread: function(req, res) {
    target
      .findByIdAndUpdate(req.params.id, req.body)
      .then(dbThread => res.json(dbThread))
      .catch(err => console.log(err));
  },
  getThreadWithPosts: function(req, res) {
    target
      .findById(req.params.id)
      .populate({
        path: 'posts',
        model: 'ThreadPost'
      })
      .then(dbThread => res.json(dbThread))
      .catch(err => console.log(err));
  }
};
