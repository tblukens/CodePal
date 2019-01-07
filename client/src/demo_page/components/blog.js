import React from 'react';

class Blog extends React.Component {  
  	render() {
  		//Getting Dynamic Blogs Data
  		let DataList = this.props.blogs.map((val, i) => {
  			return (
	  			<div className="col-xl-4 col-lg-6 col-12 text-center" key={i}>
		            <div>
		              <a href={val.link} target="_blank">
		                <span className="pc-bg">
		                  <span style={{backgroundImage: val.imgUrl }} className="img-scroll"></span>
		                </span>
		              </a>
		            </div>
		            <h2 className="demo-title">{val.lable}</h2>              
		        </div>
            );
  		});

    	return (
			<section className="fadin-blog pt-0">
				<div className="container m-width">
					<div className="row">
						<div className="col-md-12 text-center">
							<div className="section-title mb-2">
								<h2>Other Page</h2>
								<img src="assets/images/title-line.png" alt="title-line" className="img-fluid" />
							</div>
						</div>
					</div>
					<div className="row mt-35 pages-space">
		        	{DataList}
					</div>
				</div>
			</section>
      	);
  	}
 }

 export default Blog;
