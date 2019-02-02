const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CodePal"
);

const userSeed = [
  {
    "username": "mikeSeedUser",
    "firstName": "Michael",
    "lastName": "Benefiel",
    "photo": "mike.jpg",
    "designation": "Front End Developer",
    "location":"",
    "skills": "",
    "socketIoId": "",
    "lastLogin": "",
    "logOfActivity": "",
    "google": "",
    "currentMentor": "",
    "currentStudent": "",
    "experienceLevel": "",
    "facebook": "https://www.facebook.com/",
    "twitter": "https://twitter.com/",
    "linkedIn": "https://linkedin.com/",
    "gitHub": "https://github.com/",
    "portfolio": "https://mjbenefiel.github.io",
    "shortBio": "Coding ninja, skilled in the art and craft of guruing and slicing fruit",
    "mongo": "https://www.mongodb.com/",
    "express": "https://expressjs.com/",
    "react": "https://reactjs.org/",
    "node": "https://nodejs.org/en/",
    "javascript": "https://www.javascript.com/"
  },
  {
    "username": "spencerSeedUser",
    "firstName": "Spencer",
    "lastName": "Knoll",
    "photo": "spencer.jpg",
    "designation": "Front End Developer",
    "location":"",
    "skills": "",
    "socketIoId": "",
    "lastLogin": "",
    "logOfActivity": "",
    "google": "",
    "currentMentor": "",
    "currentStudent": "",
    "experienceLevel": "",
    "facebook": "https://www.facebook.com/",
    "twitter": "https://twitter.com/",
    "linkedIn": "https://linkedin.com/",
    "gitHub": "https://github.com/",
    "portfolio": "https://github.com/sp-knoll-86",
    "shortBio": "Coding ninja, skilled in the art and craft of guruing and slicing fruit",
    "mongo": "https://www.mongodb.com/",
    "express": "https://expressjs.com/",
    "react": "https://reactjs.org/",
    "node": "https://nodejs.org/en/",
    "javascript": "https://www.javascript.com/"
  },
  {
    "username": "dustinSeedUser",
    "firstName": "Dustin",
    "lastName": "Watkins",
    "photo": "dustin.jpg",
    "designation": "Back End Developer",
    "location":"Lee's Summit",
    "skills": "What is Node?",
    "socketIoId": "",
    "lastLogin": "",
    "logOfActivity": "",
    "google": "https://plus.google.com/u/0/109238416771080296214",
    "currentMentor": "Ryan Larue",
    "currentStudent": "none",
    "experienceLevel": "6 months",
    "facebook": "https://www.facebook.com/THErealSLIMdustin",
    "twitter": "https://twitter.com/",
    "linkedIn": "https://linkedin.com/in/watkins656",
    "gitHub": "https://github.com/watkins656",
    "portfolio": "https://watkins656.github.io/",
    "shortBio": "I can tell you  I don't have money. But what I do have, are a very particular set of skills.  Skills I have aquired over a very short career. Skills that make me a nightmare for people like you.",
    "mongo": "https://www.mongodb.com/",
    "express": "https://expressjs.com/",
    "react": "https://reactjs.org/",
    "node": "https://nodejs.org/en/",
    "javascript": "https://www.javascript.com/"
  },
  {
    "username": "timSeedUser",
    "firstName": "Tim",
    "lastName": "Lukens",
    "photo": "tim.jpg",
    "designation": "Back End Developer",
    "location":"",
    "skills": "",
    "socketIoId": "",
    "lastLogin": "",
    "logOfActivity": "",
    "google": "",
    "currentMentor": "",
    "currentStudent": "",
    "experienceLevel": "",
    "facebook": "https://www.facebook.com/",
    "twitter": "https://twitter.com/",
    "linkedIn": "https://linkedin.com/",
    "gitHub": "https://github.com/",
    "portfolio": "https://timlukens.com/",
    "shortBio": "The Coding Guru himself. The one. The only.  Tim.",
    "mongo": "https://www.mongodb.com/",
    "express": "https://expressjs.com/",
    "react": "https://reactjs.org/",
    "node": "https://nodejs.org/en/",
    "javascript": "https://www.javascript.com/"
  },
  {
    "username": "pirateDudeSeedUser",
    "firstName": "Pirate",
    "lastName": "Dude",
    "photo": "3.jpg",
    "designation": "Captain",
    "location":"",
    "skills": "",
    "socketIoId": "",
    "lastLogin": "",
    "logOfActivity": "",
    "google": "",
    "currentMentor": "",
    "currentStudent": "",
    "experienceLevel": "",
    "facebook": "https://www.facebook.com/",
    "twitter": "https://twitter.com/",
    "linkedIn": "https://linkedin.com/",
    "gitHub": "https://github.com/",
    "shortBio": "Look at me.  I am the captain now.",
    "mongo": "https://www.mongodb.com/",
    "express": "https://expressjs.com/",
    "react": "https://reactjs.org/",
    "node": "https://nodejs.org/en/",
    "javascript": "https://www.javascript.com/"
  },
  {
    "username": "blackHatNinjaSeedUser",
    "firstName": "Black Hat",
    "lastName": "Ninja",
    "photo": "4.jpg",
    "designation": "Backroom Dealer",
    "location":"",
    "skills": "",
    "socketIoId": "",
    "lastLogin": "",
    "logOfActivity": "",
    "google": "",
    "currentMentor": "",
    "currentStudent": "",
    "experienceLevel": "",
    "facebook": "https://www.facebook.com/",
    "twitter": "https://twitter.com/",
    "linkedIn": "https://linkedin.com/",
    "gitHub": "https://github.com/",
    "shortBio": "Coding ninja, skilled in the art and craft of guruing and slicing fruit",
    "mongo": "https://www.mongodb.com/",
    "express": "https://expressjs.com/",
    "react": "https://reactjs.org/",
    "node": "https://nodejs.org/en/",
    "javascript": "https://www.javascript.com/"
  },
  {
    "username": "Tutter",
    "firstName": "Tutter",
    "lastName": "Mouse",
    "photo": "tutter.jpg",
    "designation": "Just a Mouse",
    "location":"Hole-in-the-wall",
    "skills": "Tuttering Around",
    "socketIoId": "",
    "lastLogin": "",
    "logOfActivity": "",
    "google": "",
    "currentMentor": "",
    "currentStudent": "",
    "experienceLevel": "",
    "facebook": "https://www.facebook.com/",
    "twitter": "https://twitter.com/",
    "linkedIn": "https://linkedin.com/",
    "gitHub": "https://github.com/",
    "shortBio": "I am Tutter.  I do Tutter Stuff",
    "mongo": "https://www.mongodb.com/",
    "express": "https://expressjs.com/",
    "react": "https://reactjs.org/",
    "node": "https://nodejs.org/en/",
    "javascript": "https://www.javascript.com/"
  }
]


db.User
  .remove({})
  .then(() =>
   db.User.insertMany(userSeed)
   )
  .then(data => {
    console.log(data);
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
