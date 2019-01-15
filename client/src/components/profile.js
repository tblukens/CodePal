import React from 'react';
import Auth from "./../utility/Auth";
import request from "request";


class Profile extends React.Component {
   render() {
      let auth = new Auth();

      var options = { method: 'POST',
        url: 'https://codepal.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        body: '{"client_id":"9Y1fr7w39W3w93XxNMtJho5Y4wrWnAvF","client_secret":"Tl4DG2J1ffH47xIrwoGFor7FAr_uBLRqio6KLhUMuDhysAXB5viEgNuEsS9zBtOb","audience":"https://codepal.auth0.com/api/v2/","grant_type":"client_credentials"}' };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
      });
      
      
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1qWTVPRGMzTmpORE1FVkJNek5ETmpVeE5rUXlSVEE0TkRnek0wRXlSRGRETnpKRU5ESkZNdyJ9.eyJpc3MiOiJodHRwczovL2NvZGVwYWwuYXV0aDAuY29tLyIsInN1YiI6IjlZMWZyN3czOVczdzkzWHhOTXRKaG81WTR3clduQXZGQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2NvZGVwYWwuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1NDc1MDgzODksImV4cCI6MTU0ODM3MjM4NywiYXpwIjoiOVkxZnI3dzM5VzN3OTNYeE5NdEpobzVZNHdyV25BdkYiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.VLZs9J1LphL3qivVllpT3ciaXspO-yzUiUur01lAk_Y-lCF-_0YucT80QyxIo2rtOtTHsUtGVnlvV122lUCnWmDc5fKZWMxIj0FeqskFzKydlrHVV4AUFVj6g0paP_m4dkXQofNJIILU_0a1Ypg2Ygqw6Dh0M3Vt9O0gB5DCVQf8k2AQUa1TnmO-m4DqAx2BT498T9UbI6aU7YxeDUI4B2vEVBygJtMHvoot6Rae1uI_q93Bi5dt9AW5rX1kmqDYWByijDslEqh01GwrKhOmX-XMscaXg3p6KauL4cC8OefGaM90ed3FHvG9rLU-gIni3tdi7D92kApn3_xXm1U9Bw"
      const $ = window.$;
      let profileSubmit = (e) => {
         e.preventDefault();
         let profile = {}
         profile.firstName = $("#firstName").val().trim();
         profile.lastName = $("#lastName").val().trim();
         profile.skills = $("#skills").val().trim();
         profile.location = $("#location").val().trim();
         profile.socketIoId = $("#socketIoId").val().trim();
         profile.shortBio = $("#shortBio").val().trim();
         profile.joinDate = $("#joinDate").val().trim();
         profile.lastLogin = $("#lastLogin").val().trim();
         profile.logOfActivity = $("#logOfActivity").val().trim();
         profile.linkedIn = $("#linkedIn").val().trim();
         profile.gitHub = $("#gitHub").val().trim();
         profile.google = $("#google").val().trim();
         profile.portfolio = $("#portfolio").val().trim();
         profile.currentMentor = $("#currentMentor").val().trim();
         profile.currentStudent = $("#currentStudent").val().trim();
         profile.experienceLevel = $("#experienceLevel").val().trim();
       
         auth.updateMetaData("auth0|5c26f8ce118d9161190e82ce", profile, token)
      }

      return (
         <section className="contact" id="contact">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <div className="section-title">
                        <h2>Update your Profile</h2>
                     </div>
                     <form className="auth-form">

                        <div className="form-group">
                           <label htmlFor="firstName">First name</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="firstName" type="text" className="form-control" id="firstName" placeholder="First name" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="lastName">Last name</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="lastName" type="text" className="form-control" id="lastName" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="skills">Skills</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="skills" type="text" className="form-control" id="skills" placeholder="Skills" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="location">Location</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="location" type="text" className="form-control" id="location" placeholder="Location" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="socketIoId.io ID">socket.io ID</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="socketIoId" type="text" className="form-control" id="socketIoId" placeholder="socket.io ID" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="shortBio Bio">Short Bio</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="shortBio" type="text" className="form-control" id="shortBio" placeholder="Short Bio" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="joinDate Date">Join Date</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="joinDate" type="text" className="form-control" id="joinDate" placeholder="Join Date" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="lastLogin Log-in">Last Log-in</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="lastLogin" type="text" className="form-control" id="lastLogin" placeholder="Last Log-in" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="logOfActivity of activity (just log-in timestamps for now)">Log of activity</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="logOfActivity" type="text" className="form-control" id="logOfActivity" placeholder="Log of activity (just log-in timestamps for now)" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="linkedIn"> LinkedIn</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="linkedIn" type="text" className="form-control" id="linkedIn" placeholder=" LinkedIn" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="gitHub"> GitHub</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="gitHub" type="text" className="form-control" id="gitHub" placeholder=" GitHub" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="google">Google</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="google" type="text" className="form-control" id="google" placeholder="Google" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="portfolio">Portfolio</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="portfolio" type="text" className="form-control" id="portfolio" placeholder="Portfolio" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="currentMentor">Current Mentor</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="currentMentor" type="text" className="form-control" id="currentMentor" placeholder="Current Mentor" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="currentStudent">Current Student</label>
                           <i className="fa fa-user"></i>
                           <input required="" name="currentStudent" type="text" className="form-control" id="currentStudent" placeholder="Current Student" />
                        </div>

                        <div className="form-group">
                           <label htmlFor="experienceLevel">experience level (edited) </label>
                           <i className="fa fa-user"></i>
                           <input required="" name="experienceLevel" type="text" className="form-control" id="experienceLevel" placeholder="Experience Level" />
                        </div>

                        <div className="form-group mb-0">
                           <button className="btn-theme" onClick={profileSubmit} type="submit">Update Profile</button>
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


export default Profile;