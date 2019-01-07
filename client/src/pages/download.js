import React from 'react';

class Download extends React.Component {
  render() {
      document.body.classList.remove('inner-page');
  	return (
        <section className="auth-page">
            <div className="animation-circle-inverse">
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div className="animation-circle">
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div className="download">
                <img src="assets/images/other-page/down.png" alt="down" className="img-fluid icon"/>
                    <h3>Your download should begin automatically</h3>
                    <h4>If it doesn’t start automatically, <a href={null} className="manual-down">please click here to downlaod manually.</a></h4>
                    <a href={null}><img src="assets/images/title-codepal-logo-white-sm.png" alt="logo" className="mt-3"/></a>
            </div>
        </section>
  	);
  }
}


export default Download;