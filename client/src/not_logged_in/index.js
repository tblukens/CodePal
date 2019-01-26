import React from "react";
import Demo from "./components/demo";
import Features from "./components/feature";
import Team from "./components/team";
import Video from "./components/video";
import Auth from "../utility/Auth";

class App extends React.Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }

  render() {
    document.body.classList.remove("inner-page");
    document.body.classList.add("landing-page");

    return (
      <div>
        {/*home section*/}
        <nav
          className="navbar navbar-expand-lg  theme-nav fixed-top"
          id="landing-nav"
        >
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
                  <a className="nav-link" onClick={this.props.auth.login}>
                    Sign up
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/home`}
                  >
                    Connect
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Other Pages (demo only)
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.props.auth.login}>
                        Sign In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.props.auth.login}>
                        Sign Up
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/forget-password`}
                      >
                        Forget Password
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/thank-you`}
                      >
                        Thank You
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/review`}
                      >
                        Review
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/faq`}
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/coming-soon`}
                      >
                        Coming Soon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/download`}
                      >
                        Download
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/request`}
                      >
                        Request Demo
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/404`}
                      >
                        404
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*home section end*/}

        {/*Home Section*/}
        <section className="theme-bg home">
          <Video />

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-contain">
                  <div className="fadeInLeft-land-caption">
                    <h2 className="landing-caption text-white">
                      The P2P coding experience
                    </h2>
                    <p className="landing-text text-white">
                      CodePal is a journey, not a destination{" "}
                    </p>
                    <div class="landing-btn">
                      <a
                        onClick={this.props.auth.login}
                        className="btn btn-inverse mt-2 mr-3"
                      >
                        Sign up today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 right">
                <div className="home-right">
                  <div className="mobile-slid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Component */}
        <Team />
        {/*Feature Component*/}
        <Features />
        <Demo />
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="Copyright-section">
                  <p>
                    Copyright © 2018 Pirate Lives Matter and the Coding Ninjas |
                    All Rights Reserved | Designed By Pirate Dude from Dodge
                    Ball
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer Section End*/}
        <div className="tap-top">
          <div>
            <i className="fa fa-angle-up" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
