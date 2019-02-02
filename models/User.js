const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    "username": {
      type: String,
      required: "Username is Required"
    },
    "firstName": String,
    "lastName": String,
    "photo": {
      type: String,
      default: "1.jpg"
    },
    "designation": String,
    "skills": String,
    "location": String,
    "socketIoId": String,
    "shortBio": String,
    "joinDate": {
      type: Date,
      default: Date.now
    },
    "lastLogin": String,
    "logOfActivity": String,
    "linkedIn": String,
    "facebook": String,
    "twitter": String,
    "gitHub": String,
    "google": String,
    "portfolio": String,
    "currentMentor": String,
    "currentStudent": String,
    "experienceLevel": String
  }
);

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model('User', UserSchema);

// Export the Message model
module.exports = User;
