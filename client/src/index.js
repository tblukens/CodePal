import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NoMatch from './pages/404';
import App from './not_logged_in/index';
import Home from './home';
import BlogDetails from './blog/blog-details';
import BlogList from './blog/blog-list';
import BlogLeftSidebar from './blog/blog-leftsidebar';
import BlogRightSidebar from './blog/blog-rightsidebar';
import BlogLeftside from './blog/blog-leftside';
import BlogRightside from './blog/blog-rightside';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import ForgetPassword from './pages/forget-pwd';
import ThankYou from './pages/thank-you';
import Review from './pages/review';
import PageNotFound from './pages/404';
import Faq from './pages/faq';
import Request from './pages/request';
import Download from './pages/download';
import ComingSoon from './pages/coming-soon';
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
						<Route path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails} />
						<Route path={`${process.env.PUBLIC_URL}/blog-list`} component={BlogList} />
						<Route path={`${process.env.PUBLIC_URL}/blog-left-sidebar`} component={BlogLeftSidebar} />
						<Route path={`${process.env.PUBLIC_URL}/blog-right-sidebar`} component={BlogRightSidebar} />
						<Route path={`${process.env.PUBLIC_URL}/blog-leftside`} component={BlogLeftside} />
						<Route path={`${process.env.PUBLIC_URL}/blog-rightside`} component={BlogRightside} />
						<Route path={`${process.env.PUBLIC_URL}/sign-in`} component={SignIn} />
						<Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp} />
						<Route path={`${process.env.PUBLIC_URL}/forget-password`} component={ForgetPassword} />
						<Route path={`${process.env.PUBLIC_URL}/thank-you`} component={ThankYou} />
						<Route path={`${process.env.PUBLIC_URL}/review`} component={Review} />
						<Route path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound} />
						<Route path={`${process.env.PUBLIC_URL}/faq`} component={Faq} />
						<Route path={`${process.env.PUBLIC_URL}/request`} component={Request} />
						<Route path={`${process.env.PUBLIC_URL}/download`} component={Download} />
						<Route path={`${process.env.PUBLIC_URL}/coming-soon`} component={ComingSoon} />
						<Route path={`${process.env.PUBLIC_URL}/profile`} render={(props) => <Profiles {...state} userInfo={userInfo} userMeta={userMeta} />} />
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
