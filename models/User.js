const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model('User', UserSchema);

// Export the Message model
module.exports = User;
