import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Testimonial extends React.Component {
  render() {
    // OwlCarousel Option for Testimonial
    const options = {
        0:{
            items:1,
            dots:true,
            nav:false
        },
        600:{
            items:1,
            dots:true,
            nav:false
        },
        991:{
            items:1,
            margin:15,
        },
        1000:{
            items:1
        }
    };

    // Dynamic Testimonial Easy to Update
    let data = [
      {name: 'Mark Jecno  (Designer & Devloper)', photo:'1.png', description:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus'},
      {name: 'Mark Jecno  (Designer & Devloper)', photo:'1.png', description:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus'},
      {name: 'Mark Jecno  (Designer & Devloper)', photo:'1.png', description:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus'},
    ];

    // Dynamic Testimonial Data Loop
    let DataList = data.map((val, i) => {
        return (

            <div className="item testi-profile" key={i}>
                <div className="media">
                    <div className="animated-circle"> <img src={`assets/images/${val.photo}`} alt="1" className="img-fluid align-self-center"/></div>

                    <div className="media-body">
                        <h3 className="mt-0 sub-title">{val.name}</h3>
                        <p>{val.description}</p>
                    </div>
                </div>
            </div>
        );
    });

  	return (
        <section className="testimonial" id="testimonial">
            <div className="animation-circle-inverse">
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonil-box">
                    <OwlCarousel
                        className="testimonial-slider owl-carousel owl-theme"
                        loop={true}
                        margin={10}
                        nav={false}
                        dots={true}
                        responsive={options}
                    >
                       {DataList}
                    </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}


export default Testimonial;