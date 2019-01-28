const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ThreadPostSchema = new Schema(
  {
    user: String,
    message: String
  },
  { timestamps: true }
);

var ThreadPost = mongoose.model('ThreadPost', ThreadPostSchema);

module.exports = ThreadPost;
