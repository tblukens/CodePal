import React from 'react';


class Demo extends React.Component {
  render() {


  	return (
		<section className="work" id="work">
		   <div className="container">
		      <div className="row">
		         <div className="col-md-8 offset-md-2 text-center">
		            <div className="section-title">
		               <h2 className="coders-nearby">How CodePal Works</h2>
		               {/* <img src="assets/images/title-line.png" alt="white-line" className="img-fluid"/> */}
		               <p>The peer-to-peer programming (P2P) experience. Connect with developers from around the world to collaborate on your next project, learn more about your craft, or to expand your professional network.
							</p>
		            </div>
		         </div>
		      </div>
		      <div className="row">
		         <div className="col-lg-4 text-center">
		            <div className="process-box">
		               <img src="assets/images/icon/1.png" alt=""/>
		               <h3>Sign up</h3>
		               <p>Sign up for CodePal. Fill out your profile. Make sure to highlight your coding experience.</p>
		               <img src="assets/images/icon/1.png" alt="" className="bg-icon"/>
		            </div>
		         </div>
		         <div className="col-lg-4 text-center">
		            <div className="process-box">
		               <img src="assets/images/icon/2.png" alt=""/>
		               <h3>Connect</h3>
		               <p>Scroll through coders in your area, or from around the world, to find compatible matches.</p>
		               <img src="assets/images/icon/2.png" alt="" className="bg-icon"/>
		            </div>
		         </div>
		         <div className="col-lg-4 text-center">
		            <div className="process-box">
		               <img src="assets/images/icon/3.png" alt=""/>
		               <h3>Code</h3>
		               <p>Form a study group, a startup, or set out to disrupt the entire industry. The future belongs to you. </p>
		               <img src="assets/images/icon/3.png" alt="" className="bg-icon"/>
		            </div>
		         </div>
		      </div>
		   </div>
		</section>
  	);
  }
}

 export default Demo;
