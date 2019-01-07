import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class BlogRightside extends React.Component {
  render() {
  		document.body.classList.remove('landing-page');
      	document.body.classList.add('inner-page');
      	
  	return (
  		<div>
	  		<Navbar />
	  		{/*blog right Section start*/}
			<div className="page-margin">
				{/*breadcrumb start*/}
				<div className="breadcrumb-bg">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-6 d-align-center">
								<h2 className="title"><span> Blog</span></h2>
							</div>
							<div className="col-md-6 col-sm-6">
								<nav aria-label="breadcrumb" className="theme-breadcrumb ">
									<ol className="breadcrumb bg-transparent mb-0">
										<li className="breadcrumb-item"><a href={`${process.env.PUBLIC_URL}/`}>Home</a></li>
										<li className="breadcrumb-item active"><a href={null}>Bloglist with right sidebar</a></li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
				{/*breadcrumb end*/}

				{/*blog Section start*/}
				<section className="blog-page">
			        <div className="container">
			            <div className="row">
			                <div className="col-md-8 col-lg-9 blog-sec">
			                    <div className="row blog-list">
			                        <div className="col-lg-6 col-md-12">
			                            <div className="item news-slid">
			                                <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                    <div className="news-box">
			                                        <img src="assets/images/blog/1.jpg" alt="news-1" className="img-fluid" />
			                                    </div>
			                                </a>
			                                <div className="news-text">
			                                    <div className="blog-hover">
			                                        <h4>lorem ipsum dolor sit amet</h4>
			                                        <ul className="list-inline blog-details-list">
			                                            <li><a href={null}>John Doe</a></li>
			                                            <li><a href={null}>1 Oct</a></li>
			                                            <li><a href={null}>25 comments</a></li>
			                                            <li><a href={null}>3 View</a></li>
			                                        </ul>
			                                    </div>
			                                    <p>lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.</p>
			                                    <div className="btn-theme">View more</div>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="col-lg-6 col-md-12">
			                            <div className="item news-slid">
			                                <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                    <div className="news-box">
			                                        <img src="assets/images/blog/2.jpg" alt="news-1" className="img-fluid" />
			                                    </div>
			                                </a>
			                                <div className="news-text">
			                                    <div className="blog-hover">
			                                        <h4>lorem ipsum dolor sit amet</h4>
			                                        <ul className="list-inline blog-details-list">
			                                            <li><a href={null}>John Doe</a></li>
			                                            <li><a href={null}>2 Oct</a></li>
			                                            <li><a href={null}>25 comments</a></li>
			                                            <li><a href={null}>3 View</a></li>
			                                        </ul>
			                                    </div>
			                                    <p>lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.</p>
			                                    <div className="btn-theme">View more</div>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="col-lg-6 col-md-12">
			                            <div className="item news-slid">
			                                <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                    <div className="news-box">
			                                        <img src="assets/images/blog/3.jpg" alt="news-1" className="img-fluid" />
			                                    </div>
			                                </a>
			                                <div className="news-text">
			                                    <div className="blog-hover">
			                                        <h4>lorem ipsum dolor sit amet</h4>
			                                        <ul className="list-inline blog-details-list">
			                                            <li><a href={null}>John Doe</a></li>
			                                            <li><a href={null}>3 Oct</a></li>
			                                            <li><a href={null}>25 comments</a></li>
			                                            <li><a href={null}>3 View</a></li>
			                                        </ul>
			                                    </div>
			                                    <p>lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.</p>
			                                    <div className="btn-theme">View more</div>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="col-lg-6 col-md-12">
			                            <div className="item news-slid">
			                                <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                    <div className="news-box">
			                                        <img src="assets/images/blog/4.jpg" alt="news-1" className="img-fluid" />
			                                    </div>
			                                </a>
			                                <div className="news-text">
			                                    <div className="blog-hover">
			                                        <h4>lorem ipsum dolor sit amet</h4>
			                                        <ul className="list-inline blog-details-list">
			                                            <li><a href={null}>John Doe</a></li>
			                                            <li><a href={null}>41 Oct</a></li>
			                                            <li><a href={null}>25 comments</a></li>
			                                            <li><a href={null}>3 View</a></li>
			                                        </ul>
			                                    </div>
			                                    <p>lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.</p>
			                                    <div className="btn-theme">View more</div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                {/*sidebar section*/}
			                <div className="col-md-4 col-lg-3 order-md-last list-sidebar">
			                    <div className="sidebar">
			                        <div className="sidebar-space">
			                            <h4 className="blog-title">blog Category</h4>
			                            <div className="blog-divider"></div>
			                            <div className="blog-cat-detail">
			                                <ul>
			                                    <li className="marg-15">
			                                        <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum is simply
			                                        </a>
			                                    </li>
			                                    <li className="marg-15">
			                                        <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                            <i className="fa fa-angle-right" aria-hidden="true"></i> There Are Many Variations
			                                        </a>
			                                    </li>
			                                    <li className="marg-15">
			                                        <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                            <i className="fa fa-angle-right" aria-hidden="true"></i> it has survived not five
			                                        </a>
			                                    </li>
			                                    <li className="marg-15">
			                                        <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum has been the.
			                                        </a>
			                                    </li>
			                                    <li className="marg-15">
			                                        <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum is random.
			                                        </a>
			                                    </li>
			                                </ul>
			                            </div>
			                        </div>
			                        <div className="sidebar-space">
			                            <h4 className="blog-title">Popular Tag</h4>
			                            <div className="blog-divider"></div>
			                            <div className="tags marg-20">
			                                <a href={null}><span className="badge badge-theme">Responsive design</span></a>
			                                <a href={null}><span className="badge badge-theme">Color options</span></a>
			                                <a href={null}><span className="badge badge-theme">Multiple demos</span></a>
			                                <a href={null}><span className="badge badge-theme">Dedicated support</span></a>
			                                <a href={null}><span className="badge badge-theme">Documentation</span></a>
			                                <a href={null}><span className="badge badge-theme">PSD is included</span></a>
			                                <a href={null}><span className="badge badge-theme">Text</span></a>
			                                <a href={null}><span className="badge badge-theme">Support</span></a>
			                                <a href={null}><span className="badge badge-theme">Responsive</span></a>
			                                <a href={null}><span className="badge badge-theme">Design</span></a>
			                            </div>
			                        </div>
			                        <h4 className="blog-title">Recent Post</h4>
			                        <div className="blog-divider"></div>
			                        <div className="recent-blog marg-20">
			                            <div className="media">
			                                <img className="mr-3" src="assets/images/blog/blog-comment-two.jpg" alt="blog" />
			                                <div className="media-body">
			                                    <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                        <h5 className="mt-0">Lorem Ipsum Is Simply Dummy</h5>
			                                    </a>
			                                    <p className="m-0">05 March 2011</p>
			                                </div>
			                            </div>
			                            <div className="media">
			                                <img className="mr-3" src="assets/images/blog/blog-comment-three.jpg" alt="blog" />
			                                <div className="media-body">
			                                    <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                        <h5 className="mt-0">Lorem Ipsum Is Simply Dummy</h5>
			                                    </a>
			                                    <p className="m-0">05 March 2011</p>
			                                </div>
			                            </div>
			                            <div className="media">
			                                <img className="mr-3" src="assets/images/blog/blog-comment.jpg" alt="blog" />
			                                <div className="media-body">
			                                    <a href={`${process.env.PUBLIC_URL}/blog-details`}>
			                                        <h5 className="mt-0">Lorem Ipsum Is Simply Dummy</h5>
			                                    </a>
			                                    <p className="m-0">05 March 2011</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                {/*sidebar section*/}
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
				{/*blog Section End*/}
				{/*Footer Section start*/}
					<Footer />
				{/*Footer Section End*/}
			</div>
			{/*blog right Section end*/}
		</div>
  	);
  }
}

export default BlogRightside;