const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    skills: String,
    location: String,
    socketIoId: String,
    shortBio: String,
    joinDate: String,
    lastLogin: String,
    logOfActivity: String,
    linkedIn: String,
    gitHub: String,
    google: String,
    portfolio: String,
    currentMentor: String,
    currentStudent: String,
    experienceLevel: String

});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
