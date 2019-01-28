const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ForumThreadSchema = new Schema(
  {
    title: String,
    user: String,
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ThreadPost'
      }
    ]
  },
  { timestamps: true }
);

var ForumThread = mongoose.model('ForumThread', ForumThreadSchema);

module.exports = ForumThread;
