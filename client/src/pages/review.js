import React from 'react';
import Navbar from '../components/navbar';
import Footer from "../components/footer";

class Review extends React.Component {
  render() {
        document.body.classList.remove('landing-page');
        document.body.classList.add('inner-page');
  	return (
      <div>
         {/* Navbar Component*/}
         <Navbar />

 		<div className="page-margin">
         {/*breadcrumb start*/}
            <div className="breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 d-align-center">
                            <h2 className="title"><span> Review</span></h2>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <nav aria-label="breadcrumb" className="theme-breadcrumb ">
                                <ol className="breadcrumb bg-transparent mb-0">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active"><a href={null}>Review</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
         {/*breadcrumb end*/}

         {/*Review Section Start*/}
            <section className="review-block blog-page">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-lg-4 col-md-6">
                            <div className="review-box">
                                <img src="assets/images/review.png" alt="review" className="img-fluid"/>
                                    <h5>John Martin</h5>
                                    <div className="rating-star">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="review-message">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="review-box">
                                <img src="assets/images/review.png" alt="review" className="img-fluid"/>
                                    <h5>John Martin</h5>
                                    <div className="rating-star">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="review-message">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="review-box">
                                <img src="assets/images/review.png" alt="review" className="img-fluid"/>
                                    <h5>John Martin</h5>
                                    <div className="rating-star">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="review-message">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="review-box">
                                <img src="assets/images/review.png" alt="review" className="img-fluid"/>
                                    <h5>John Martin</h5>
                                    <div className="rating-star">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="review-message">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="review-box">
                                <img src="assets/images/review.png" alt="review" className="img-fluid"/>
                                    <h5>John Martin</h5>
                                    <div className="rating-star">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="review-message">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="review-box">
                                <img src="assets/images/review.png" alt="review" className="img-fluid"/>
                                    <h5>John Martin</h5>
                                    <div className="rating-star">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="review-message">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animation-circle absolute">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="animation-circle-inverse">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </section>
         {/*Review Section End*/}

         {/*Footer Section start*/}
            <Footer/>
         {/*Footer Section End*/}
        </div>
      </div>
  	);
  }
}


export default Review;