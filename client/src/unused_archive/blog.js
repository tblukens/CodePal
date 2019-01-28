import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Blog extends React.Component {
  render() {
      // OwlCarousel Option for Blogs
      const options = {
          0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:2
            },
            1200:{
                items:3
            }
      };
		
      // Dynamic Blog Data Easy to Update
      let data = [
        {date:'28 Dec', title: 'lorem ipsum dolor sit amet', description: 'lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.', link:'blog-details', photo:'1.jpg'},
        {date:'28 Dec', title: 'lorem ipsum dolor sit amet', description: 'lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.', link:'blog-details', photo:'2.jpg'},
        {date:'28 Dec', title: 'lorem ipsum dolor sit amet', description: 'lorem ipsum dolor sit amet, consecteturamet adipisicing elit, tempor incididunt ut labore. lorem ipsum dolor sit amet.', link:'blog-details', photo:'3.jpg'},
      ];

      // Dynamic Blog Data Loop
      let DataList = data.map((val, i) => {
          return (
              <div className="item news-slid" key={i}>
                  <div className="news-box">
                    <a href={val.link}>
                          <img src={`assets/images/blog/${val.photo}`} alt="news-1" className="img-fluid" />
                    </a>
                     <div className="blog-hover">
                        <h4>{val.title}</h4>
                        <ul className="list-inline blog-details-list">
                           <li><a href={null}>John Doe</a></li>
                           <li><a href={null}>{val.date}</a></li>
                           <li><a href={null}>25 comments</a></li>
                           <li><a href={null}>3 View</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="news-text">
                     <p>{val.description}</p>
                     <a href={val.link} className="btn-theme">View more</a>
                  </div>
              </div>

          );
      });

  	return (
        <section className="team-bg" id="news">
           <div className="animation-circle-inverse">
              <i></i>
              <i></i>
              <i></i>
           </div>
           <div className="container">
              <div className="row">
                 <div className="col-md-8 offset-md-2 text-center">
                    <div className="section-title">
                       <h2>Our Recent Blog</h2>
                       <img src="assets/images/title-line.png" alt="/title-line" />
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!
                          ipsum dolor sit Rem autem voluptatem obcaecati</p>
                    </div>
                 </div>
                 <div className="col-md-12">
                      <OwlCarousel
                          className="news-carousel owl-carousel owl-theme"
                          loop={true}
                          margin={30}
                          nav={false}
                          dots={true}
                          responsive={options}
                      >
                         {DataList}
                      </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}


export default Blog;