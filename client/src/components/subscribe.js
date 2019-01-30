import React from 'react';
// import ThankYou from './pages/thank-you';
// import { Link } from "react-router-dom";

class Subscribe extends React.Component {
  render() {
		
  	return (
        <section className="subscribe-bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-5">
                        <div className="subscribe">
                            <h3>Sign up for coding tips, tricks and tutorials</h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 d-inline">
                        <div className="email-box">
                          <form action= "#"  className="auth-form needs-validation" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
                                  <input className="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Your email address:" type="email" required="required" />
                             
                             </form>
                           </div>   
                          
                        
                    </div>
                     <div className="col-sm-12 col-lg-1 d-inline">
                                 <a href="http://eepurl.com/gfwwWT"> <button type="submit" className="btn btn-email" id="mc-submit"  href="/thank-you">Subscribe</button></a>
                            </div>
                            
                </div>
            </div>
        </section>
  	);
  }
}


export default Subscribe;