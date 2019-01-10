import React from "react";
// import About from "./components/about";
// import Feature from "./components/feature";
// import Work from "./components/work";
// import ScreenShot from "./components/screenshot";
import Team from "./components/team";
// import Team from "./components/team";
// import Blog from "./components/blog";
// import Price from "./components/price";
// import Testimonial from "./components/testimonial";
// import FAQ from "./components/faq";
import Contact from "./components/contact";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    document.body.classList.remove("inner-page");
    return (
      <div>
        {/* Navbar Section*/}
        <nav className="navbar navbar-expand-lg  theme-nav fixed-top">
          <div className="container">
            <a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}>
              <img src="assets/images/codepal-logo-white-sm.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mainmenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fa fa-align-justify" aria-hidden="true" />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
              <ul className="navbar-nav ml-auto" id="mymenu">
                <li className="nav-item ">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                   Potential Matches
                  </a>
                </li>
                {/* <li className="nav-item"> 
                  <a className="nav-link" href="#feature">
                    feature
                  </a>
                </li> */}

                <li className="nav-item">
                  <a className="nav-link" href="#d">
                  Messages
                  </a>
                </li>

                {/* <li className="nav-item">
                  <a className="nav-link" href="#team">
                    team
                  </a>
                </li>*/}
                {/* <li className="nav-item dropdown"> 
                  <a
                    href="#news"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/blog-list`}
                      >
                        blog list
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                      >
                        blog details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/blog-leftside`}
                      >
                        leftsidebar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/blog-rightside`}
                      >
                        rightsidebar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}
                      >
                        details leftsidebar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/blog-right-sidebar`}
                      >
                        details rightsidebar
                      </Link>
                    </li>
                  </ul>
                </li>*/}
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>

                  <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/sign-in`}
                      >
                        Sign In
                      </Link>
                    </li>
                <li className="nav-item dropdown">
                  {/* <a 
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Other Pages (Demo only)
                  </a> */}
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/sign-in`}
                      >
                        Sign In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/sign-up`}
                      >
                        Sign Up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/forget-password`}
                      >
                        Forget Password
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/thank-you`}
                      >
                        Thank You
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/review`}
                      >
                        Review
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/faq`}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/coming-soon`}
                      >
                        Coming Soon
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/download`}
                      >
                        Download
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/request`}
                      >
                        Request Demo
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`${process.env.PUBLIC_URL}/404`}
                      >
                        404
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Home One Section Start */}
        <section className="slide-bg" id="home">
          <div className="animation-circle">
            <i />
            <i />
            <i />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex-1">
                  <div className="slide-text">
                    <div>
                      <h1>
                        Begin your coding journey with
                        <br />
                        <span className="main-title">CodePal!</span>
                      </h1>
                      <h4>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </h4>
                      <div className="slid-btn">
                        <a href="">
                          <img
                            src="assets/images/app1.png"
                            alt="app1"
                            className="img-fluid"
                            data-tilt
                            data-tilt-perspective="50"
                            data-tilt-speed="350"
                            data-tilt-max="1.8"
                          />
                        </a>
                        <a href="">
                          <img
                            src="assets/images/app2.png"
                            alt="app2"
                            className="img-fluid"
                            data-tilt
                            data-tilt-perspective="50"
                            data-tilt-speed="350"
                            data-tilt-max="1.8"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="home-right">
                  <div className="mobile-slid">
                    <img
                      src="assets/images/top-mobile.png"
                      alt="top1"
                      className="img-fluid"
                    />
                  </div>
                  {/* <div className="profile-msg"> 
                    <img
                      src="assets/images/top2.png"
                      alt="top2"
                      className="img-fluid"
                    />
                  </div>
                  <div className="awesome">
                    <img
                      src="assets/images/top3.png"
                      alt="top3"
                      className="img-fluid"
                    />
                  </div>
                  <div className="profile-1">
                    <img
                      src="assets/images/top4.png"
                      alt="top4"
                      className="img-fluid"
                    />
                  </div>
                  <div className="emoji">
                    <img
                      src="assets/images/top5.png"
                      alt="top5"
                      className="img-fluid"
                    />
                  </div>
                  <div className="profile-2">
                    <img
                      src="assets/images/top1.png"
                      alt="top1"
                      className="img-fluid"
                    />
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Home One Section End */}

        {/* About Component*/}
        {/* <About /> */}

        {/*ScreenShot Component*/}
        <Team />

      
        {/*Work Component
        <Work /> */}

        {/*Team Component
        <Team />*/}

        {/*Price Component
        <Price /> */}

        {/*Testimonial Component
        <Testimonial /> */}

        {/*Faq Component
        <FAQ /> */}

        {/*Blog Component
        <Blog /> */}

        {/*download section
        <section className="download-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 display-flex">
                <div className="footer-logo">
                  <img
                    src="assets/images/footer-codepal-logo-white-sm.png"
                    alt="footer-logo"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-5 display-flex">
                <div className="download-text">
                  <h3>Download the CodePal app and enjoy it</h3>
                </div>
              </div>
              <div className="col-xl-4 display-flex">
                <div className="download-img">
                  <ul>
                    <li>
                      <img
                        src="assets/images/app1.png"
                        alt="foot-app"
                        className="img-fluid"
                        data-tilt
                        data-tilt-perspective="50"
                        data-tilt-speed="350"
                        data-tilt-max="1.8"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/app2.png"
                        alt="foot-app1"
                        className="img-fluid"
                        data-tilt
                        data-tilt-perspective="50"
                        data-tilt-speed="350"
                        data-tilt-max="1.8"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*end download section*/}

        {/*Contact Component*/}
        <Contact />

        {/*Subscription Component*/}
        <Subscribe />

        {/*Footer Component*/}
        <Footer />

        {/*tap-top*/}
        <div className="tap-top">
          <div>
            <i className="fa fa-angle-up" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
