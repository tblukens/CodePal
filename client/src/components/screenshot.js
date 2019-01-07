import React from 'react';
import Swiper from 'react-id-swiper';


class ScreenShot extends React.Component {
  render() {
      const params = {
		  effect: 'coverflow',
		  grabCursor: true,
		  initialSlide: 2,
		  centeredSlides: true,
		  loop: true,
		  spaceBetween: 0,
		  slidesPerView: 4,
		  pagination: {},
		  coverflowEffect: {
			  rotate: 0,
			  stretch: 0,
			  depth: 100,
			  modifier: 1.43,
			  slideShadows: false,
		  },
		  autoplay: {
			  delay: 5000,
		  },
		  breakpoints: {
			  360: {
				  slidesPerView: 1,
				  coverflowEffect: {
					  depth: 50,
					  modifier: 0,
				  },
			  },
			  640: {
				  slidesPerView: 3,
				  coverflowEffect: {
					  depth: 80,
					  modifier: 0,
				  },
			  }
		  }
	  }

  	return (
		<section id="screenshots" className="theme-bg screenshots" >
			<div className="animation-circle">
				<i></i>
				<i></i>
				<i></i>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="section-title">
							<h2 className="text-white">Potential Matches</h2>
							<img src="assets/images/white-line.png" alt="title-line" className="img-fluid" />
						</div>
					</div>
				</div>
				<div className="row">
					  <div className="col-sm-12">
								<Swiper {...params} className="swiper-screenshots-container-1 swiper-container">
											<div className="swiper-slide">
												<img src="assets/images/ss/1.png" alt="1"/>
											</div>
											<div className="swiper-slide">
												<img src="assets/images/ss/2.png" alt="2"/>
											</div>
											<div className="swiper-slide">
												<img src="assets/images/ss/3.png" alt="3"/>
											</div>
											<div className="swiper-slide">
												<img src="assets/images/ss/4.png" alt="4"/>
											</div>
											<div className="swiper-slide">
												<img src="assets/images/ss/1.png" alt="5"/>
											</div>
											<div className="swiper-slide">
												<img src="assets/images/ss/2.png" alt="5"/>
											</div>
									</Swiper>
					  </div>
					</div>
			</div>
		</section>
  	);
  }
}


export default ScreenShot;