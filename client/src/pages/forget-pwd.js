import React from 'react';


class ForgetPassword extends React.Component {
  render() {
      document.body.classList.remove('inner-page');
  	return (
        <section className="auth-page">
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
           <div className="auth-card">
              <div className="text-center">
                 <h2>Forgot Password</h2>
                 <img src="assets/images/title-line.png" alt="title-line" className="img-fluid line"/>
              </div>
              <div className="main">
                 <form className="auth-form">
                    <div className="form-group">
                       <label htmlFor="exampleInputEmail1">Email</label>
                       <i className="fa fa-envelope-o"></i>
                       <input required="" name="login[username]" type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                       <button className="btn submit" type="submit">Send Code</button>
                    </div>
                    <div className="or-saparator"><span>or</span></div>
                    <h6 className="text-center mt-0 mb-3">Sign in with:</h6>
                    <div className="form-button text-center social-btns">
                       <button className="btn submit fb">Sign in</button>
                       <button className="btn submit ggl">Signup</button>
                    </div>
                 </form>
              </div>
           </div>
        </section>
  	);
  }
}


export default ForgetPassword;