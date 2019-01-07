import React from 'react';


class ThankYou extends React.Component {
  render() {
      document.body.classList.remove('inner-page');
  	return (
        <section className="p-0">
            <div className="animation-circle-inverse">
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div className="thanks-bg">
                <div className="thank-you">
                    <img src="assets/images/thanks.gif" alt="thanks" className="img-fluid"/>
                        <h3 className="mb-4">Thank you for Downloading the CodePal!</h3>
                </div>
            </div>
        </section>
  	);
  }
}


export default ThankYou;