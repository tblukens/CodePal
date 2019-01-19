const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema(
  {
    msgTo: {
      type: String,
      required: true
    },
    msgFrom: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// This creates our model from the above schema, using mongoose's model method
var Message = mongoose.model('Message', MessageSchema);

// Export the Message model
module.exports = Message;
