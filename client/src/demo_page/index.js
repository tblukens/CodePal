import React from 'react';
import Demo from './components/demo';

// import Blog from './components/blog';
import Features from './components/feature';
import Team from './components/team';

class App extends React.Component {
  render() {
      document.body.classList.remove('inner-page');
      document.body.classList.add('landing-page');
/*
  	let blogs = [
  		{lable: 'BLOG LIST', link:'blog-list', imgUrl:'url(assets/images/demo/blog-list.jpg)'},
  		{lable: 'BLOG DETAILS ', link:'blog-details', imgUrl:'url(assets/images/demo/blog-details.jpg)'},
  		{lable: 'BLOG LIST WITH SIDEBAR', link:'blog-leftside', imgUrl:'url(assets/images/demo/blog-list-left.jpg)'},
  		{lable: 'BLOG LIST WITH RIGHT SIDEBAR', link:'blog-rightside', imgUrl:'url(assets/images/demo/blog-list-right.jpg)'},
  		{lable: 'BLOG DETAILS WITH SIDEBAR', link:'blog-left-sidebar', imgUrl:'url(assets/images/demo/blog-details-left-sidebar.jpg)'},
  		{lable: 'BLOG DETAILS WITH RIGHT SIDEBAR', link:'blog-right-sidebar', imgUrl:'url(assets/images/demo/blog-details-right-sidebar.jpg)'},
  		{lable: 'SIGN IN', link:'sign-in', imgUrl:'url(assets/images/demo/sign-in.jpg)'},
  		{lable: 'SIGN UP', link:'sign-up', imgUrl:'url(assets/images/demo/sign-up.jpg)'},
  		{lable: 'FORGET PASSWORD', link:'forget-password', imgUrl:'url(assets/images/demo/forget.jpg)'},
        {lable: 'COMING SOON ', link:'coming-soon', imgUrl:'url(assets/images/demo/comingsoon.jpg)'},
        {lable: 'Request Schedule demo page', link:'request', imgUrl:'url(assets/images/demo/request.jpg)'},
        {lable: 'REVIEW', link:'review', imgUrl:'url(assets/images/demo/review.jpg)'},
        {lable: 'DOWNLOAD PAGE', link:'download', imgUrl:'url(assets/images/demo/download.jpg)'},
        {lable: 'FAQ PAGE', link:'faq', imgUrl:'url(assets/images/demo/faq.jpg)'},
        {lable: '404 NOT PAGE', link:'404', imgUrl:'url(assets/images/demo/404.jpg)'},
        {lable: 'THANK YOU', link:'thank-you', imgUrl:'url(assets/images/demo/thankyou.jpg)'},
    ];

  	let features = [
  		{lable:'REACT', imgUrl:'assets/images/features/react.png'},
  		{lable:'CSS 3', imgUrl:'assets/images/features/css-3.png'},
  		{lable:'SCSS', imgUrl:'assets/images/features/sass.png'},
  		{lable:'FREE PSD', imgUrl:'assets/images/features/ps.png'},
  		{lable:'BOOTSTRAP 4', imgUrl:'assets/images/features/bootstrap-4.png'},
  		{lable:'ANIMATE CSS', imgUrl:'assets/images/features/animate-css.png'},
  		{lable:'RESPONSIVE', imgUrl:'assets/images/features/responsive.png'},
  		{lable:'GOOGLE FONTS SUPPORT', imgUrl:'assets/images/features/google-fonts-support.png'},
  		{lable:'W3C VALIDATION', imgUrl:'assets/images/features/w3c-validation.png'},
  		{lable:'PIXEL PERFECT DESIGN', imgUrl:'assets/images/features/pixel-perfect-design.png'},
  		{lable:'ALL BROWSER SUPPORT', imgUrl:'assets/images/features/all-broweser-support.png'},
  		{lable:'RTL (Coming soon)', imgUrl:'assets/images/features/rtl.png'},
  	];
*/
  	return (
  		<div>
  		{/*home section*/}
			<nav className="navbar navbar-expand-lg  theme-nav">
				<div className="container">
					<a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/codepal-logo-white-sm.png" alt="logo" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"  aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"><i className="fa fa-align-justify" aria-hidden="true"></i></span>
					</button>
					<div className="collapse navbar-collapse" id="mainmenu">
						<ul className="navbar-nav ml-auto" id="mymenu">
							<li className="nav-item ">
								<a className="nav-link" href={`${process.env.PUBLIC_URL}/sign-up`} >Sign up</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link" href={`${process.env.PUBLIC_URL}/home`} >Connect</a>
							</li>
							{/* <li className="nav-item dropdown"> 
								<a href={null} className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog details</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-list`}>blog list</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-details`}>blog details</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-leftside`}>leftsidebar</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-rightside`}>rightsidebar</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>details leftsidebar</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-right-sidebar`}>details rightsidebar</a></li>
								</ul>
							</li> */}
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other Pages (demo only)</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/sign-in`}>Sign In</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/sign-up`}>Sign Up</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/forget-password`}>Forget Password</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/thank-you`}>Thank You</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/review`}>Review</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/faq`}>FAQ</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/coming-soon`}>Coming Soon</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/download`}>Download</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/request`}>Request Demo</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/404`}>404</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
	    {/*home section end*/}

	    {/*Home Section*/}
			<section className="theme-bg home">
				<div className="animation-circle-inverse">
					<i></i>
					<i></i>
					<i></i>
				</div>
				<div className="animation-circle-inverse absolute">
					<i></i>
					<i></i>
					<i></i>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="home-contain">
								<div className="fadeInLeft-land-caption">
									<h2 className="landing-caption text-white">The P2P coding experience</h2>
									<p className="text-white">CodePal is perfect lorem ipsum dummy app to code with peers throughout the world!  </p>
									<div>
										<a href={`${process.env.PUBLIC_URL}/sign-up`} className="btn btn-inverse mt-2 mr-3">Sign up today</a>
										
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 right">
							<div className="home-right">
								<div className="mobile-slid">
									<img src="assets/images/demo/home/main.png" alt="top1" className="img-fluid" />
								</div>
								{/* <div className="photo"> 
									<img src="assets/images/demo/home/photo-Editing-app.png" alt="top2" className="img-fluid" />
								</div>
								<div className="gym">
									<img src="assets/images/demo/home/gym-app.png" alt="top3" className="img-fluid" />
								</div>
								<div className="game">
									<img src="assets/images/demo/home/game-app.png" alt="top4" className="img-fluid" />
								</div>
								<div className="msg">
									<img src="assets/images/demo/home/messanger.png" alt="top5" className="img-fluid" />
								</div>
								<div className="broweser">
									<img src="assets/images/demo/home/browser.png" alt="top1" className="img-fluid" />
								</div>
								<div className="love-emoji">
									<img src="assets/images/top5.png" alt="top5" className="img-fluid" />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
	   
	 
	    {/*Home Section End*/}

	    {/* home demo section */}
    	<Demo ></Demo>
    	{/*home demo section end*/}
	
    	{/*other page section*/}
	    {/* <Blog blogs={blogs}></Blog>  */}
	    {/*other page section end*/} 

	    {/*main feature section*/}
	    {/* <Features features={features}></Features> */}
	    {/*main feature section end*/}

	    {/*template section*/}
		{/*  
			<section className="theme-bg pt-70 m-0 pb-0 grab">
			    <div className="container m-width">
			        <div className="row">
			            <div className="col-xl-5 offset-xl-1 col-md-6 ">
			                <div className="tamp-d-flex">
			                    <div>
			                        <h2 className="tapl-title fadeInLeft-land-caption mb-5">Stop thinking, Just grab it</h2>
			                        <a href={null}  className=" btn btn-inverse">Download</a>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-5 offset-xl-1 col-md-6 ">
			                <div className="home-right grab-img">
			                    <div className="mobile-slid">
			                        <img src="assets/images/top-mobile.png" alt="top1" className="img-fluid" />
			                    </div>
			                    <div className="profile-msg">
			                        <img src="assets/images/top2.png" alt="top2" className="img-fluid" />
			                    </div>
			                    <div className="awesome">
			                        <img src="assets/images/top3.png" alt="top3" className="img-fluid" />
			                    </div>
			                    <div className="emoji">
			                        <img src="assets/images/top5.png" alt="top5" className="img-fluid" />
			                    </div>
			                    <div className="profile-2">
			                        <img src="assets/images/top1.png" alt="top1" className="img-fluid" />
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section> */}
	    {/*template section end*/}

	    {/*Rate template section*/}
		{/* 
			<section>
			    <div className="container-fluid">
			        <div className="row">
			            <div className="col-md-12 text-center">
			                <div className="tamp-d-flex">
			                    <div>
			                        <p className="coming-title rating-title">If you love this template please rate us</p>
			                        <div className="rating-star">
			                            <img src="assets/images/star.png" alt="star" />
			                            <img src="assets/images/star.png" alt="star" />
			                            <img src="assets/images/star.png" alt="star" />
			                            <img src="assets/images/star.png" alt="star" />
			                            <img src="assets/images/star.png" alt="star" />
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section> */}
	    {/*Rate template section end*/}
{/*Feature Component*/}
		<Features />
		{/*Feature Component*/}
		<Team />
	    {/*Footer Section start*/}
			<div className="bg-light">
			    <div className="container">
			        <div className="row">
			            <div className="col-md-12">
			                <div className="Copyright-section">
			                    <p>Copyright © 2018 Pirate Lives Matter and the Coding Ninjas  |   All Rights Reserved   |   Designed By Pirate Dude from Dodge Ball</p>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		{/*Footer Section End*/}

	   </div>
  	);
  }
}

export default App;