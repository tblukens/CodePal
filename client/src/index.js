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

  /* eslint no-restricted-globals: 0*/
  //======================================
  class Root extends React.Component {
    state = {
      username: null,
      userInfo: null
    }

    logIn = (user) => {
      console.log(user);
      localStorage.setItem("username", user)
      this.setState(
        {
          username: user,
        })
    }
    componentWillMount() {
      axios
      .get('http://tbl-chat1.herokuapp.com')
      .then(res => console.log(`${res.data.toUpperCase()}!!!`))
      .catch(err => console.log(err));
      let user = localStorage.getItem("username")
      if(user){
        this.setState({username: user})
      }
    }
    render() {
<<<<<<< HEAD
      if (this.state.userInfo === null) { return false };
=======
>>>>>>> c92c17815d13edbd20e43934b26642c445fbc7ff
      let userName = this.state.username;
      let userInfo = this.state.username;
      return (
        <BrowserRouter basename={'/'}>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              render={props => (
                <App  userInfo={userInfo} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/callback`}
              render={props => (
                <Home  userInfo={userInfo} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/home`}
              render={props => (
                <Home  userInfo={userInfo} user={this.state.username} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/profiles`}
              render={props => (
                <Profiles  userInfo={userInfo} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/chat`}
              render={props => (
                <Chat  userName={this.state.username} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/forum`}
              render={props => (
                <Forum  userInfo={userInfo} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/passport`}
              render={props => (
                <Passport  userInfo={userInfo} login={this.logIn} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/passport-login`}
              render={props => (
                <Passport  loginPage={true} userInfo={userInfo} login={this.logIn} />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/createthread`}
              render={props => (
                <CreateThread  userInfo={userName} />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      );
    }
  }

  ReactDOM.render(<Root  />, document.getElementById('root'));



//======================================

registerServiceWorker();
