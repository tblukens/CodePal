import React from 'react';


class FAQ extends React.Component {
  render() {
		
  	return (
        <section className="theme-bg faq " id="faq">
           <div className="container">
              <div className="row">
                 <div className="col-md-12 text-center">
                    <div className="section-title">
                       <h2 className="text-white">Frequently asked Question</h2>
                       <img src="assets/images/white-line.png" alt="title-line" className="img-fluid" />
                    </div>
                 </div>
              </div>
              <div className="row faq-row">
                 <div className="col-lg-6">
                    <div className="accordion" id="accordionExample">
                       <div className="card mb-3">
                          <div className="card-header" id="headingzero">
                             <h5 className="mb-0">
                                <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapsezero" aria-expanded="false" aria-controls="collapsezero">
                                   01 We're ready to start now
                                   <i className="fa fa-angle-down pull-right"></i>
                                </button>
                             </h5>
                          </div>

                          <div id="collapsezero" className="collapse" aria-labelledby="headingzero" data-parent="#accordionExample">
                             <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore
                             </div>
                          </div>
                       </div>
                       <div className="card mb-3">
                          <div className="card-header" id="headingOne">
                             <h5 className="mb-0">
                                <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   02 Sedeiusmod tm inccsetetur ?
                                   <i className="fa fa-angle-down pull-right"></i>
                                </button>
                             </h5>
                          </div>

                          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                             <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore
                             </div>
                          </div>
                       </div>
                       <div className="card mb-3">
                          <div className="card-header" id="headingTwo">
                             <h5 className="mb-0">
                                <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                   03 Sedeiusmod inc aliquatraiy?
                                   <i className="fa fa-angle-down pull-right"></i>
                                </button>
                             </h5>
                          </div>
                          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                             <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore
                             </div>
                          </div>
                       </div>
                       <div className="card">
                          <div className="card-header" id="headingThree">
                             <h5 className="mb-0">
                                <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                   04 Tempor inc aliquatraiy?
                                   <i className="fa fa-angle-down pull-right"></i>
                                </button>
                             </h5>
                          </div>
                          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                             <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-lg-6 text-center">
                    <img src="assets/images/faq.png" className="img-fluid" alt="" />
                 </div>
              </div>
           </div>
        </section>
  	);
  }
}


export default FAQ;