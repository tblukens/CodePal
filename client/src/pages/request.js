import React from 'react';
import Footer from "../components/footer";


class SignIn extends React.Component {
  render() {
      document.body.classList.remove('inner-page');

  	return (
        <div className="page-margin">
            {/*request Section start*/}
            <section className="auth-page request-page">
                <div className="animation-circle-inverse">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="animation-circle">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 request-left">
                            <div className="auth-card">
                                <div className="main">
                                    <div className="mb-4 text-left">
                                        <h2>Schedule demo</h2>
                                        <img src="assets/images/title-line.png" alt="" className="img-fluid"/>
                                    </div>
                                    <form className="auth-form">
                                        <div className="form-group">
                                            <label for="exampleInputname">Name</label>
                                            <i className="fa fa-user"></i>
                                            <input required="" name="loginname" type="text" className="form-control" id="exampleInputname" placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputnumber">Company name</label>
                                            <i className="fa fa-phone"></i>
                                            <input required="" name="loginnumber" type="text" className="form-control" id="exampleInputnumber" placeholder="Company name"/>
                                        </div>

                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <i className="fa fa-envelope-o"></i>
                                            <input required="" name="login[username]" type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Phone number</label>
                                            <i className="fa fa-lock"></i>
                                            <input id="exampleInputPassword1" required="" type="number" className="form-control" placeholder="Phone Number"/>
                                        </div>
                                        <div className="form-group mb-0 text-left">
                                            <button className="btn submit" name="submit" value="submit" type="submit">Schedule Demo</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6  request-right">
                            <div className="home-right">
                                <div className="mobile-slid mt-0">
                                    <img src="assets/images/top-mobile.png" alt="top1" className="img-fluid"/>
                                </div>
                                <div className="profile-msg">
                                    <img src="assets/images/top2.png" alt="top2" className="img-fluid"/>
                                </div>
                                <div className="awesome">
                                    <img src="assets/images/top3.png" alt="top3" className="img-fluid"/>
                                </div>
                                <div className="profile-1">
                                    <img src="assets/images/top4.png" alt="top4" className="img-fluid"/>
                                </div>
                                <div className="emoji">
                                    <img src="assets/images/top5.png" alt="top5" className="img-fluid"/>
                                </div>
                                <div className="profile-2">
                                    <img src="assets/images/top1.png" alt="top1" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*request Section End*/}

            {/*Footer Section start*/}
                <Footer/>
            {/*Footer Section End*/}
        </div>
  	);
  }
}


export default SignIn;