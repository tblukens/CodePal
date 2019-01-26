import React from 'react';
import Auth from "../utility/Auth";
import axios from "axios";
import _ from "underscore";
// import Profile from "../components/profile";
// import request from "request";
let auth = new Auth();

class Profiles extends React.Component {
   state = {
      props: this.props,
      token: 'test',

   }

   componentDidMount() {
      let callback = (token) => {
         this.setState({ token: token })
      }
      auth.getToken(callback);
      this.getUser();

      // prom.then((value) => {
      //  })

   }
   getUser() {
      let self = this;
      let currentUserId = localStorage.getItem("Auth0_Id")
      axios({
         url: '/api/users/usermeta/' + currentUserId,
         method: 'get',
      })
         .then(function (response) {
            let body = JSON.parse(response.data.body);
            let info = (body.user_metadata);
            let userDetails = _.map(info, function (value, key) {
               return `${key}  :  ${value} _________________________________`
            })
            self.setState({ currentUser: userDetails })

         })
         .catch(function (error) {
            console.log(error);
         });
   }
   handleInputChange() {

   }

   profileSubmit(e) {
      /* eslint no-restricted-globals: 0*/
      let user = localStorage.getItem("Auth0_Id");
      const $ = window.$;
      e.preventDefault();
      let profile = {}

      let values = [
         'firstName',
         'lastName',
         'skills',
         'location',
         'socketIoId',
         'shortBio',
         'joinDate',
         'lastLogin',
         'logOfActivity',
         'linkedIn',
         'gitHub',
         'google',
         'portfolio',
         'currentMentor',
         'currentStudent',
         'experienceLevel'
      ]

      values.forEach(value => {
         update(value)
      });

      let updateObject = {
         "user_id": user,
         "new_data": profile
      }

      axios({
         url: '/api/users/update',
         method: 'post',
         data: updateObject
      })
         .then((response) => {
            alert("Profile Updated Successfully!")
            this.getUser();

         })
         .catch(function (error) {
            console.log(error);
         });
      function update(value) {
         let id = `#${value}`;
         let data = $(id).val().trim();
         if (data) {
            profile[value] = data;
         }
      }
   }

   render() {

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
                           <button className="btn-theme" onClick={this.profileSubmit.bind(this)} type="submit">Update Profile</button>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-6">
                     "Current User Info with ZERO styling"
                     <p>
                        {(this.state.currentUser)}
                     </p>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}


export default Profiles;