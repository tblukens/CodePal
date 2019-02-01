import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NoMatch from './pages/404';
import App from './not_logged_in/index';
import Home from './home';
import Profiles from './pages/profiles'; // for testing
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './pages/chat/Layout';
import Forum from './pages/forum/forum';
import CreateThread from './pages/forum/create'
import Passport from './pages/passport/passport-page';
import './pages/chat/index.css';

import axios from 'axios';

//======================================
//Authentication
//======================================
import Auth from './utility/Auth';
let meta;
const auth = new Auth();
let callback = res => {
  let userMeta = JSON.parse(res).user_metadata;
  return userMeta;
};
let profile = auth.getProfile();
console.log(profile.sub + ' = Profile Sub');
auth.getToken(function (token) {
  meta = auth.getMetaData(profile.sub, token, callback);
});
let state = {};
window.setState = changes => {
  state = Object.assign({}, state, changes);
  /* eslint no-restricted-globals: 0*/
  //======================================
  class Root extends React.Component {
    state = {
      username: null
    }

    logIn = (user) => {
      console.log(user);
      this.setState({ username: user })
    }
    componentWillMount() {
      let username = localStorage.getItem("username")
      if (username) {
        this.setState({ username: username })
      }
      axios
        .get('http://tbl-chat1.herokuapp.com')
        .then(res => console.log(`${res.data.toUpperCase()}!!!`))
        .catch(err => console.log(err));
    }
    render() {
      console.log("render with user: " + this.state.username);
      if (this.state.username != null) {
        axios
          .get(`api/users/getuser/${this.state.username}`)
          .then((res) => {
            console.log(res.data[0].username);
            let username = (res.data[0].username);
            localStorage.setItem("username", username)
          }
          )
          .catch(err => console.log(err));
      }
      let userInfo = this.state.username;
      let userMeta = meta;
      return (
        <BrowserRouter basename={'/'}>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              render={props => (
                <App {...state} userInfo={userInfo} userMeta={userMeta} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/callback`}
              render={props => (
                <Home {...state} userInfo={userInfo} userMeta={userMeta} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/home`}
              render={props => (
                <Home {...state} userInfo={userInfo} userMeta={userMeta} user={this.state.username} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/profiles`}
              render={props => (
                <Profiles {...state} userInfo={userInfo} userMeta={userMeta} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/chat`}
              render={props => (
                <Chat {...state} userInfo={userInfo} userMeta={userMeta} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/forum`}
              render={props => (
                <Forum {...state} userInfo={userInfo} userMeta={userMeta} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/passport`}
              render={props => (
                <Passport {...state} userInfo={userInfo} userMeta={userMeta} login={this.logIn} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/passport-login`}
              render={props => (
                <Passport {...state} loginPage={true} userInfo={userInfo} userMeta={userMeta} login={this.logIn} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/createthread`}
              render={props => (
                <CreateThread {...state} userInfo={userInfo} userMeta={userMeta} />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      );
    }
  }

  ReactDOM.render(<Root {...state} />, document.getElementById('root'));
};

//======================================
//Authentication
//======================================


let initialState = {
  location: location.pathname.replace(/^\/?|\/$/g, ''),
  meta: meta,
  auth
};

window.setState(initialState);
//======================================

registerServiceWorker();
