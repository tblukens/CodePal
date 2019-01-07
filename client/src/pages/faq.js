import React from 'react';
import Navbar from '../components/navbar';
import Footer from "../components/footer";

class Faq extends React.Component {
  render() {
        document.body.classList.remove('landing-page');
        document.body.classList.add('inner-page');
  	return (
      <div>
         {/* Navbar Component*/}
         <Navbar />

         {/*blog Section start*/}
         <div className="page-margin">

             {/*breadcrumb start*/}
             <div className="breadcrumb-bg">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-6 col-sm-6 d-align-center">
                             <h2 className="title"><span>FAQ</span></h2>
                         </div>
                         <div className="col-md-6 col-sm-6">
                             <nav aria-label="breadcrumb" className="theme-breadcrumb ">
                                 <ol className="breadcrumb bg-transparent mb-0">
                                     <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                     <li className="breadcrumb-item active"><a href={null}>FAQ</a></li>
                                 </ol>
                             </nav>
                         </div>
                     </div>
                 </div>
             </div>
             {/*breadcrumb end*/}


             {/*sign in*/}
             <section className="faq blog-page">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-12">
                             <div className="accordion" id="accordionExample">
                                 <div className="card mb-3">
                                     <div className="card-header" id="headingzero">
                                         <h5 className="mb-0">
                                             <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapsezero" aria-expanded="false" aria-controls="collapsezero">
                                                 Collapsible Group Item #0
                                                 <i className="fa fa-angle-down pull-right"></i>
                                             </button>
                                         </h5>
                                     </div>

                                     <div id="collapsezero" className="collapse" aria-labelledby="headingzero" data-parent="#accordionExample">
                                         <div className="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                         </div>
                                     </div>
                                 </div>
                                 <div className="card mb-3">
                                     <div className="card-header" id="headingOne">
                                         <h5 className="mb-0">
                                             <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                 Collapsible Group Item #1
                                                 <i className="fa fa-angle-down pull-right"></i>
                                             </button>
                                         </h5>
                                     </div>

                                     <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                         <div className="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                         </div>
                                     </div>
                                 </div>
                                 <div className="card mb-3">
                                     <div className="card-header" id="headingTwo">
                                         <h5 className="mb-0">
                                             <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                 Collapsible Group Item #2
                                                 <i className="fa fa-angle-down pull-right"></i>
                                             </button>
                                         </h5>
                                     </div>
                                     <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                         <div className="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                         </div>
                                     </div>
                                 </div>
                                 <div className="card">
                                     <div className="card-header" id="headingThree">
                                         <h5 className="mb-0">
                                             <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                 Collapsible Group Item #3
                                                 <i className="fa fa-angle-down pull-right"></i>
                                             </button>
                                         </h5>
                                     </div>
                                     <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                         <div className="card-body">
                                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                         </div>
                                     </div>
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
             {/*sign up*/}

             {/*Footer Section start*/}
                <Footer/>
             {/*Footer Section End*/}
         </div>
         {/*blog Section start*/}
      </div>
  	);
  }
}


export default Faq;