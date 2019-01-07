import React from 'react';


class Subscribe extends React.Component {
  render() {
		
  	return (
        <section className="subscribe-bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                        <div className="subscribe">
                            <h3>Subscribe to Newsletter</h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <div className="email-box">
                            <form action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"  className="auth-form needs-validation" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                                  <input className="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Your email address:" type="email" required="required" />
                                  <button type="submit" className="btn btn-email" id="mc-submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}


export default Subscribe;