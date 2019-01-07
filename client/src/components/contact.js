import React from 'react';


class Contact extends React.Component {
  render() {
		
  	return (
        <section className="contact" id="contact">
           <div className="container">
              <div className="row">
                 <div className="col-md-6">
                    <div className="section-title">
                       <h2>Get In Touch</h2>
                    </div>
                    <form className="auth-form">
                       <div className="form-group">
                          <label htmlFor="exampleInputName1">Name</label>
                          <i className="fa fa-user"></i>
                          <input required="" name="login[username]" type="email" className="form-control" id="exampleInputName1" placeholder="User name"/>
                       </div>
                       <div className="form-group">
                          <label htmlFor="exampleInputEmail12">Email</label>
                          <i className="fa fa-envelope-o"></i>
                          <input required="" name="login[email]" type="email" className="form-control" id="exampleInputEmail12" placeholder="Email" />
                       </div>
                       <div className="form-group">
                          <label>Your message</label>
                          <i className="fa fa-commenting-o"></i>
                          <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                       </div>
                       <div className="form-group mb-0">
                          <button className="btn-theme" type="submit">Send Message</button>
                       </div>
                    </form>
                 </div>
                 <div className="col-md-6">
                    <div className="section-title">
                       <h2>Contact Info</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consecte adipisicing elit sed do eiusmod tempor incididunt.</p>
                    <ul className="contact-box">
                       <li>
                          <div className="contact-circle">
                             <i className="fa fa-map-marker" aria-hidden="true"></i>
                          </div>
                          <div className="contact-text">
                             <h3>Location</h3>
                             <p>123 Business Avenue, Hoston, USA</p>
                          </div>
                       </li>
                       <li>
                          <div className="contact-circle">
                             <i className="fa fa-phone" aria-hidden="true"></i>
                          </div>
                          <div className="contact-text">
                             <h3>Call US</h3>
                             <p>+91 123-456-7890</p>
                          </div>
                       </li>
                       <li>
                          <div className="contact-circle">
                             <i className="fa fa-envelope" aria-hidden="true"></i>
                          </div>
                          <div className="contact-text">
                             <h3>Email Us</h3>
                             <p>support@gmail.com</p>
                          </div>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>
  	);
  }
}


export default Contact;