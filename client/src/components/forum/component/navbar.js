import React from "react";

// import Footer from "./footer";
// import { Link } from "react-router-dom";
// import Auth from ".././utility/Auth";

class NavbarForum extends React.Component {
  /* componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  } */

  render() {
    // document.body.classList.remove("inner-page");

    return (
      <div>
        {/* Navbar Section*/}
        <nav
          className="navbar navbar-expand-lg  theme-nav fixed-top"
          id="navbar-forum" 
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
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/home`}
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/chat`}
                  >
                    Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarForum;
