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
                                <h4 className="sub-title">Easy Installation</h4>
                                <p className="">Lorem Ipsum has been the industry's</p>
                             </li>
                             <li className="timeline">
                                <h4 className="sub-title">The CodePal App</h4>
                                <p className="">Lorem Ipsum has been the industry's</p>
                             </li>
                             <li className="timeline">
                                <h4 className="sub-title">Secure Backup & Recovery</h4>
                                <p className="">Many desktop publishing packages</p>
                             </li>
                             <li className="timeline">
                                <h4 className="sub-title">Easy File Sharing</h4>
                                <p className="">Lorem Ipsum has been the industry's</p>
                             </li>
                          </ul>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 future-mobile">
                    {/* <img src="assets/images/screen2.png" alt="feature-mob" className="img-fluid"/> */}
                 </div>
                 <div className="col-lg-4 col-sm-6">
                    <div className="future-box">
                       <div className="future-timeline-right">
                          <ul className="text-left">
                             <li className="timeline-right">
                                <h4>Easy Installation</h4>
                                <p className="">Lorem Ipsum has been the industry's</p>
                             </li>
                             <li className="timeline-right">
                                <h4>The CodePal App</h4>
                                <p className="">Lorem Ipsum has been the industry's</p>
                             </li>
                             <li className="timeline-right">
                                <h4>Secure Backup & Recovery</h4>
                                <p className="">Many desktop publishing packages</p>
                             </li>
                             <li className="timeline-right">
                                <h4>Easy File Sharing</h4>
                                <p className="">Lorem Ipsum has been the industry's</p>
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