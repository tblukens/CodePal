import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class BlogList extends React.Component {
  render() {
  		document.body.classList.remove('landing-page');
      	document.body.classList.add('inner-page');
      	
  	return (
  		<div>
	  		<Navbar />

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
										<li className="breadcrumb-item active"><a href={null}>Blog</a></li>
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
							<div className="col-sm-12">
								<div className="row blog-list">
									<div className="col-lg-6 col-md-12">
										<div className="item news-slid">
											<a href={`${process.env.PUBLIC_URL}/blog-details`}>
												<div className="news-box">
													<img src="assets/images/blog/1.jpg" alt="news-1" className="img-fluid"/>
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
			                                    <a href={`${process.env.PUBLIC_URL}/blog-details`} className="btn-theme">View more</a>
			                                </div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="item news-slid">
											<a href={`${process.env.PUBLIC_URL}/blog-details`}>
												<div className="news-box">
													<img src="assets/images/blog/2.jpg" alt="news-1" className="img-fluid"/>
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
			                                    <a href={`${process.env.PUBLIC_URL}/blog-details`} className="btn-theme">View more</a>
			                                </div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="item news-slid">
											<a href={`${process.env.PUBLIC_URL}/blog-details`}>
												<div className="news-box">
													<img src="assets/images/blog/3.jpg" alt="news-1" className="img-fluid"/>
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
			                                    <a href={`${process.env.PUBLIC_URL}/blog-details`} className="btn-theme">View more</a>
			                                </div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="item news-slid">
											<a href={`${process.env.PUBLIC_URL}/blog-details`}>
												<div className="news-box">
													<img src="assets/images/blog/4.jpg" alt="news-1" className="img-fluid"/>
												</div>
											</a>
			                                <div className="news-text">
			                                    <div className="blog-hover">
			                                        <h4>lorem ipsum dolor sit amet</h4>
			                                        <ul className="list-inline blog-details-list">
			                                            <li><a href={null}>John Doe</a></li>
			                                            <li><a href={null}>5 Oct</a></li>
			                                            <li><a href={null}>25 comments</a></li>
			                                            <li><a href={null}>3 View</a></li>
			                                        </ul>
			                                    </div>
			                                    <p>lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.</p>
			                                    <a href={`${process.env.PUBLIC_URL}/blog-details`} className="btn-theme">View more</a>
			                                </div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="item news-slid">
											<a href={`${process.env.PUBLIC_URL}/blog-details`}>
												<div className="news-box">
													<img src="assets/images/blog/5.jpg" alt="news-1" className="img-fluid"/>
												</div>
											</a>
			                                <div className="news-text">
			                                    <div className="blog-hover">
			                                        <h4>lorem ipsum dolor sit amet</h4>
			                                        <ul className="list-inline blog-details-list">
			                                            <li><a href={null}>John Doe</a></li>
			                                            <li><a href={null}>6 Oct</a></li>
			                                            <li><a href={null}>25 comments</a></li>
			                                            <li><a href={null}>3 View</a></li>
			                                        </ul>
			                                    </div>
			                                    <p>lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.</p>
			                                    <a href={`${process.env.PUBLIC_URL}/blog-details`} className="btn-theme">View more</a>
			                                </div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="item news-slid">
											<a href={`${process.env.PUBLIC_URL}/blog-details`}>
												<div className="news-box">
													<img src="assets/images/blog/6.jpg" alt="news-1" className="img-fluid"/>
												</div>
											</a>
			                                <div className="news-text">
			                                    <div className="blog-hover">
			                                        <h4>lorem ipsum dolor sit amet</h4>
			                                        <ul className="list-inline blog-details-list">
			                                            <li><a href={null}>John Doe</a></li>
			                                            <li><a href={null}>8 Oct</a></li>
			                                            <li><a href={null}>25 comments</a></li>
			                                            <li><a href={null}>3 View</a></li>
			                                        </ul>
			                                    </div>
			                                    <p>lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.</p>
			                                    <a href={`${process.env.PUBLIC_URL}/blog-details`} className="btn-theme">View more</a>
			                                </div>
										</div>
									</div>
								</div>
							</div>

							{/*paginations*/}
							<div className="col-md-12">
								<nav aria-label="Page navigation" className="blog-pagination">
									<ul className="pagination justify-content-center blog-pagin">
										<li className="page-item">
											<a className="page-link" href={null} aria-label="Previous">
												<i className="fa fa-angle-left" aria-hidden="true"></i>
											</a>
										</li>
										<li className="page-item active"><a className="page-link" href={null}>1</a></li>
										<li className="page-item"><a className="page-link" href={null}>2</a></li>
										<li className="page-item"><a className="page-link" href={null}>3</a></li>
										<li className="page-item">
											<a className="page-link" href={null} aria-label="Next">
												<i className="fa fa-angle-right" aria-hidden="true"></i>
											</a>
										</li>
									</ul>
								</nav>
							</div>
							{/*paginations end*/}
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
		</div>
  	);
  }
}

export default BlogList;