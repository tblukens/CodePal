import React from "react";
import Team from "./components/team";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import Auth from "./utility/Auth";

class Home extends React.Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }

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

                <li className="nav-item">
                  <a className="nav-link" href="#d">
                    Messages
                  </a>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`${process.env.PUBLIC_URL}/profiles`}
                  >
                    Profile
                  </Link>
                </li>

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

        {/* Home One Section Start */}
        <section className="slide-bg" id="home">
          <div className="animation-circle">
            <i />
            <i />
            <i />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex-1">
                  <div className="slide-text">
                    <div>
                      <h1>
                        Connect with coders in your area, or across the globe.
                        <br />
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Component */}
        <Team />

        {/*Subscription Component*/}
        <Subscribe />

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
