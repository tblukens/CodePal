const express = require('express');
const app = express();
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let passport = require('passport');
let flash = require('connect-flash');
let LocalStrategy = require('passport-local').Strategy;
// const server = require('http').Server(app)
// const io = require('socket.io')(server)

/* ---------- socket io implementation ---------- */
// const SocketManager = require('./utility/SocketManager')

// io.on('connection', SocketManager)
/* ---------------------------------------------- */
const cors = require('cors');

const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

/* ------------------ SOCKET IO SERVER ------------------ */
/* ------------------------------------------------------ */

app.use(cors({credentials: true, origin: true}))
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'pirate booty',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);
//Add Passport Auth Route
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/CodePal');


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
