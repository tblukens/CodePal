import React from "react";
import Team from "./components/team";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
// import { Link } from "react-router-dom";
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

                <li className="nav-item">
                  <a className="nav-link" href={`${process.env.PUBLIC_URL}/chat`}>
                    Chat
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#d">
                    Forum
                  </a>
                </li>

                <li className="nav-item ">
                  <p className="nav-link" id="bar">
                    |
                  </p>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href={`${process.env.PUBLIC_URL}/profiles`}
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.props.auth.logout}>
                        Sign Out
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
                        Hello {this.props.user}.
                        <br />
                      </h1>
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
