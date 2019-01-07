import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Price extends React.Component {
  render() {
    // OwlCarousel Option for Prices
    const options = {
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:2,
            nav:false,
            dots:true
        },
        767:{
            items:2,
            nav:false,
            dots:true
        },
        992:{
            items:3,
            nav:false,
            dots:true
        },
        1000:{
            items:4
        }
    };

    // Dynamic Price Data Easy to Update
    let data = [
        {title: 'Standard', lable:'Only the basic features', price:'49', features:'<li>24/7 On-site Support</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>', link:'#'},
        {title: 'Premium', lable:'Take it to the next level', price:'59', features:'<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>', link:'#'},
        {title: 'Professional', lable:'Our biggest plan', price:'69', features:'<li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
        {title: 'Standard', lable:'Our biggest plan', price:'79', features:'<li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
        {title: 'Standard', lable:'Our biggest plan', price:'79', features:'<li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
    ];

    // Dynamic Price Data Loop
    let DataList = data.map((val, i) => {
        return (
            <div className="item" key={i}>
                <div className="package-box">
                  <h3>{val.title}</h3>
                    <div className="price-box">
                        <span>$</span>
                        <h2>{val.price}</h2>
                        <h5 className="plan-clr">
                            <span className="d-block">Year</span>
                        </h5>
                    </div>
                    <div className="price-plan text-center">
                        <ul>
                            <li>{val.lable}</li>
                            <li>real time sync</li>
                            <li>unlimited attachment</li>
                            <li>customize theme</li>
                        </ul>
                        <div className="price-plan-btn">Select Plan</div>
                    </div>
                </div>
            </div>
        );
    });
		
  	return (
        <section className="theme-bg" id="package">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2 className="text-white">Our Pricing Plans</h2>
                            <img src="assets/images/white-line.png" alt="title-line" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                    <OwlCarousel
                        className="plan-slider owl-carousel owl-theme"
                        loop={true}
                        items={4}
                        margin={15}
                        navClass={['owl-prev','owl-next']}
                        navText={['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>']}
                        nav={true}
                        dots={false}
                        responsive={options}
                    >
                       {DataList}
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}


export default Price;