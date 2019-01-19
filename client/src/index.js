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
	console.log(JSON.parse(res).user_metadata);
	meta = (JSON.parse(res).user_metadata);
return meta;
}
meta = auth.getMetaData("auth0|5c26f8ce118d9161190e82ce", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qWTVPRGMzTmpORE1FVkJNek5ETmpVeE5rUXlSVEE0TkRnek0wRXlSRGRETnpKRU5ESkZNdyJ9.eyJpc3MiOiJodHRwczovL2NvZGVwYWwuYXV0aDAuY29tLyIsInN1YiI6IjlZMWZyN3czOVczdzkzWHhOTXRKaG81WTR3clduQXZGQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2NvZGVwYWwuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1NDc1MDc3NTAsImV4cCI6MTU0ODM3MTc0OCwiYXpwIjoiOVkxZnI3dzM5VzN3OTNYeE5NdEpobzVZNHdyV25BdkYiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.mQPBYq-VcyRAR-d8ZGV3eEyLzzOKHP_sGK5qTLzkyZzcYaylj2sZgR9KTtsob8KZTBJL_3J8jCKFJuFvNXMF_7IacS6lTR4xx6IOA1bYKVFG20rn_9YzwzCT5o4B1rdthdDYXOpp8WAT3PYy89uc35ENcmlpJCQ-1cOlnRNhvh7Yy6qYqRN1aOHpYJuxqz_lNpdWcmveRPbVa0FIpUL9I6tr1hMZtGaDQIFpo0PwhbuZOt37gwgTeRhaceSrggslI-z3-fL2cB2kfAPEqDDw0QfwFEX10q2tgB_cfKomgbQf-yYk6PdM_hOge31q0oYzVMSAKksewz6iRzzgk6xmug", callback);
let state = {};
window.setState = (changes) => {
	state = Object.assign({}, state, changes);
	/* eslint no-restricted-globals: 0*/
	//======================================
	class Root extends React.Component {
		render() {
			let userInfo = this.props.auth.getProfile();
			let userMeta = this.props.auth.getMetaData("auth0|5c26f8ce118d9161190e82ce", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qWTVPRGMzTmpORE1FVkJNek5ETmpVeE5rUXlSVEE0TkRnek0wRXlSRGRETnpKRU5ESkZNdyJ9.eyJpc3MiOiJodHRwczovL2NvZGVwYWwuYXV0aDAuY29tLyIsInN1YiI6IjlZMWZyN3czOVczdzkzWHhOTXRKaG81WTR3clduQXZGQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2NvZGVwYWwuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1NDcwNzk5MjYsImV4cCI6MTU0NzE2NjMyNiwiYXpwIjoiOVkxZnI3dzM5VzN3OTNYeE5NdEpobzVZNHdyV25BdkYiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.RMRe8hP1SApWsc0OgyrdYNBjNiFmfOhFZ4aTzPiQxRmsx7tQgreEPiA67bexYD236-PbWOmsXgUAvTCn0O2O97ar-6vITRFNN82Blo8ZTCEll5qqcQMRoZYRVNMscE4TCkRcJB2C3rtl-Ksyl8q7wig8EKUMNSyfjLpj84c8PvMt-01VXmdtkif7n8nOYMXj9i4fDEDbiZWp04a8pMZWDROi51QaVVRcDEkeUAfcKZNNWzZWZKgacEJNg6al-g615afqK8T9TeBU1HZ3VI8VyNmIFOR9bjnqOICL8LggcsqFCQNXcD3jxcDlik3eQ8Lzf9xorSki9ht9TWKTgV7eig", callback);

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
console.log(initialState.location);

window.setState(initialState);
//======================================

registerServiceWorker();
