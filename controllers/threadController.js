const db = require("../models");

const target = db.ForumThread;
const post = db.ThreadPost;

module.exports = {
  showAllThreads: function (req, res) {
    target
      .find({})
      .sort({ createdAt: -1 })
      .then(dbThreads => res.json(dbThreads))
      .catch(err => console.log(err));
  },
  createThread: function (req, res) {
    console.log(req.body);
    const { user, message } = req.body;
    target
      .create(req.body)
      .then(dbThread => {
        post.create({ user, message })
          .then(dbPost => {
            return target.findOneAndUpdate(
              { _id: dbThread._id },
              { $push: { posts: dbPost._id } },
              { new: true }
            );
          })
          .then(dbThreadPost => {
            res.json(dbThreadPost)
          })
          .catch(error => console.log(error));
      })
  },
  deleteThread: function (req, res) {
    console.log("delete");
    target
      .findByIdAndDelete(req.params.id)
      .then(dbThread => res.json(dbThread))
      .catch(err => console.log(err));
  },
  editThread: function (req, res) {
    target
      .findByIdAndUpdate(req.params.id, req.body)
      .then(dbThread => res.json(dbThread))
      .catch(err => console.log(err));
  },
  getThreadWithPosts: function (req, res) {
    target
      .findById(req.params.id)
      .populate({
        path: "posts",
        model: "ThreadPost"
      })
      .then(dbThread => res.json(dbThread))
      .catch(err => console.log(err));
  }
};
