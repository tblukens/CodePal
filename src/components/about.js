import React from 'react';

class About extends React.Component {
  render() {
		
  	return (
  	    <section id="about" className="pb-0 about">
              <div className="about-chat">
                 <div className="container ">
                    <div className="row">
                       <div className="col-md-12 text-center">
                          <div className="section-title">
                             <h2>About CodePal</h2>
                             <img src="assets/images/title-line.png" alt="title-line" className="img-fluid"/>
                          </div>
                       </div>
                       <div className="col-md-12 about-box">
                          <div className="row">
                             <div className="col-lg-3 col-6 about-border">
                                <div className="chat-box">
                                   <img src="assets/images/stay-connected.png" alt="stay-connected"/>
                                      <h3 className="sub-title"> Stay Connected</h3>
                                </div>
                             </div>
                             <div className="col-lg-3 col-6 about-border">
                                <div className="chat-box">
                                   <img src="assets/images/get-notified.png" alt="get-notified" />
                                      <h3  className="sub-title"> Get Notified </h3>
                                </div>
                             </div>
                             <div className="col-lg-3 col-6 about-border">
                                <div className="chat-box">
                                   <img src="assets/images/stay-updated.png" alt="stay-updated"/>
                                      <h3  className="sub-title">Stay Updated</h3>
                                </div>
                             </div>
                             <div className="col-lg-3 col-6">
                                <div className="chat-box">
                                   <img src="assets/images/mini-world.png" alt="mini-world"/>
                                      <h3  className="sub-title">Mini World</h3>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-md-12">
                          <div className="chat-slide">
                             <h3>Connect with People all over the world , with your small device</h3>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="container-fluid text-center">
                 <img src="assets/images/banner.png" alt="banner.png" className="img-fluid full-banner"/>
              </div>
        </section>
  	);
  }
}


export default About;