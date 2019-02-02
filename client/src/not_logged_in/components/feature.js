import React from 'react';


class Feature extends React.Component {
  render() {
		
  	return (
        <section className="theme-bg feature" id="feature">
           <div className="container">
              <div className="animation-circle-inverse">
                 <i></i>
                 <i></i>
                 <i></i>
              </div>
              <div className="row">
                 <div className="col-md-12 text-center">
                    <div className="section-title">
                       <h2 className="text-white">CodePal Features</h2>
                       <img src="assets/images/white-line.png" alt="white-line" className="img-fluid"/>
                    </div>
                 </div>
                 <div className="col-lg-4 col-sm-6">
                    <div className="future-box">
                       <div className="future-timeline">
                          <ul >
                            
                             <li className="timeline">
                                <h4 className="sub-title">Simple sign up</h4>
                                <p className="">Sign up in a few easy steps</p>
                             </li>
                            
                             <li className="timeline">
                                <h4 className="sub-title">CodePal Forum</h4>
                                <p className="">A place to share ideas & problem solve</p>
                             </li>
                          </ul>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 future-mobile">
                    <img src="assets/images/screen2.png" alt="feature-mob" className="img-fluid"/>
                 </div>
                 <div className="col-lg-4 col-sm-6">
                    <div className="future-box">
                       <div className="future-timeline-right">
                          <ul className="text-left">
                         
                             <li className="timeline-right">
                                <h4>CodePal Chat</h4>
                                <p className="">Staying in touch has never been easier</p>
                             </li>
                            
                             <li className="timeline-right">
                                <h4>Do what you love</h4>
                                <p className="">Never code alone</p>
                             </li>
                          </ul>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
  	);
  }
}


export default Feature;