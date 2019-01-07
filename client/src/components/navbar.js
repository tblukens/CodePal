import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
  	return (
		<nav className="navbar navbar-expand-lg  theme-nav fixed-top">
			<div className="container">
				<a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/codepal-logo-white-sm.png" alt="logo" /></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"  aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"><i className="fa fa-align-justify" aria-hidden="true"></i></span>
				</button>
				<div className="collapse navbar-collapse" id="mainmenu">
					<ul className="navbar-nav ml-auto" id="mymenu">
						<li className="nav-item ">
							<a className="nav-link" href={`${process.env.PUBLIC_URL}/home`} >Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={`${process.env.PUBLIC_URL}/home`} >about</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={`${process.env.PUBLIC_URL}/home`} >feature</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href={`${process.env.PUBLIC_URL}/home`} >screenshot</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href={`${process.env.PUBLIC_URL}/home`} >team</a>
						</li>
						<li className="nav-item dropdown">
							<a href="#news" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
							<ul className="dropdown-menu">
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-list`} >blog list</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-details`} >blog details</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-leftside`} >leftsidebar</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-rightside`} >rightsidebar</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-left-sidebar`} >details leftsidebar</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/blog-right-sidebar`} >details rightsidebar</Link></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={`${process.env.PUBLIC_URL}/home`} >contact us</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other Page</a>
							<ul className="dropdown-menu">
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/sign-in`}>Sign In</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/sign-up`}>Sign Up</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/forget-password`}>Forget Password</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/thank-you`}>Thank You</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/review`}>Review</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/faq`}>FAQ</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/coming-soon`}>Coming Soon</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/download`}>Download</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/request`}>Request Demo</Link></li>
								<li className="nav-item"><Link className="nav-link" to={`${process.env.PUBLIC_URL}/404`}>404</Link></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
  	);
  }
}

export default Navbar;