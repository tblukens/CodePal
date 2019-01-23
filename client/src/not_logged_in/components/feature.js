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
                                <h4 className="sub-title">P2P Programming</h4>
                                <p className="">Connect with like-minded developers</p>
                             </li>
                             <li className="timeline">
                                <h4 className="sub-title">Learning forum</h4>
                                <p className="">A place to share ideas and solve problems</p>
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
                                <h4>Conveninent messaging</h4>
                                <p className="">Staying in touch has never been easier</p>
                             </li>
                             <li className="timeline-right">
                                <h4>Expand your network</h4>
                                <p className="">CodePal is more than just coding</p>
                             </li>
                             <li className="timeline-right">
                                <h4>Do what you love</h4>
                                <p className="">And never code alone</p>
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