import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NoMatch from './pages/404';
import App from './not_logged_in/index';
import Home from './home';
import Profiles from './pages/profiles'; // for testing
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//======================================
//Authentication
//======================================
import Auth from "./utility/Auth";
let meta;
const auth = new Auth();
let callback = (res) => {
	let userMeta = (JSON.parse(res).user_metadata);
	return userMeta;
}
let profile = auth.getProfile();
console.log(profile.sub + " = Profile Sub");
auth.getToken(function(token){
	meta = auth.getMetaData(profile.sub, token, callback);
})
let state = {};
window.setState = (changes) => {
	state = Object.assign({}, state, changes);
	/* eslint no-restricted-globals: 0*/
	//======================================
	class Root extends React.Component {
		render() {
			let userInfo = this.props.auth.getProfile();
			let userMeta = meta;
			return (
				<BrowserRouter basename={'/'} >
					<Switch>
						<Route exact path={`${process.env.PUBLIC_URL}/`} render={(props) => <App {...state} userInfo={userInfo} userMeta={userMeta} />} />
						<Route path={`${process.env.PUBLIC_URL}/callback`} render={(props) => <Home {...state} userInfo={userInfo} userMeta={userMeta} />} />
						<Route path={`${process.env.PUBLIC_URL}/home`} render={(props) => <Home {...state} userInfo={userInfo} userMeta={userMeta} />} />
						<Route path={`${process.env.PUBLIC_URL}/profiles`} render={(props) => <Profiles {...state} userInfo={userInfo} userMeta={userMeta} />} />
						<Route component={NoMatch} />
					</Switch>
				</BrowserRouter>
			);
		}
	}

	ReactDOM.render(<Root {...state} />, document.getElementById('root'));
}

//======================================
//Authentication
//======================================
let username = auth.getProfile().given_name || "Dustin Willis";

let initialState = {
	name: username,
	location: location.pathname.replace(/^\/?|\/$/g, ""),
	meta: meta,
	auth
};

window.setState(initialState);
//======================================

registerServiceWorker();
