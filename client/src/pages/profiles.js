import React from 'react';
import Auth from "../utility/Auth";
import axios from "axios";
import Fields from '../components/Fields'
import _ from "underscore";
// import Profile from "../components/profile";
// import request from "request";
let auth = new Auth();


class Profiles extends React.Component {
   state = {
      props: this.props,
      token: 'test',
      username: null,
      userDetails: null,
      fields: [
         { id: "firstName", properName: "First Name", fontAwesome: "fa fa-user", value: null },
         { id: "lastName", properName: "Last Name", fontAwesome: "fa fa-user", value: null },
         { id: 'skills', properName: 'Skills', fontAwesome: "fa fa-tools", value: null },
         { id: 'location', properName: 'Location', fontAwesome: "fa fa-map-marker-alt", value: null },
         { id: 'socketIoId', properName: 'socket.io Id', fontAwesome: "fa fa-id-card-alt", value: null },
         { id: 'shortBio', properName: 'Short Bio', fontAwesome: "fa fa-book", value: null },
         { id: 'joinDate', properName: 'Join Date', fontAwesome: "fa fa-birthday-cake", value: null },
         { id: 'lastLogin', properName: 'Last Login', fontAwesome: "fa fa-user-clock", value: null },
         { id: 'logOfActivity', properName: 'Log Of Activity', fontAwesome: "fa fa-list-alt", value: null },
         { id: 'linkedIn', properName: 'Linked In', fontAwesome: "fa fa-linkedin", value: null },
         { id: 'gitHub', properName: 'Git Hub', fontAwesome: "fa fa-github", value: null },
         { id: 'google', properName: 'Google', fontAwesome: "fa fa-google", value: null },
         { id: 'portfolio', properName: 'Portfolio', fontAwesome: "fa fa-drafting-compass", value: null },
         { id: 'currentMentor', properName: 'Current Mentor', fontAwesome: "fa fa-chalkboard-teacher", value: null },
         { id: 'currentStudent', properName: 'Current Student', fontAwesome: "fa fa-graduation-cap", value: null },
         { id: 'experienceLevel', properName: 'Experience Level', fontAwesome: "fas fa-level-up-alt", value: null },
      ]
   }
   componentWillMount() {
      let user = localStorage.getItem("username")
      this.setState({ username: user })
      this.getUser();
   }
   componentDidMount() {
      let callback = (token) => {
         this.setState({ token: token })
      }
      auth.getToken(callback);


      // prom.then((value) => {
      //  })

   }

   getUser() {
      let self = this;
      let currentuser = localStorage.getItem("username")
      axios({
         url: '/api/users/getuser/' + currentuser,
         method: 'get',
      })
         .then((response) => {
            let fields = self.state.fields;
            let userDetails = response.data[0];
            self.setState({ userDetails: userDetails })

            Object.keys(userDetails).map((detail, index) => {
               fields.forEach((field, i) => {
                  if (field.id === detail) {
                     fields[i].value = userDetails[detail];
                  }
               })
            })

            this.setState({ fields: fields })
            // map((detail,i)=>{
            //    console.log(detail);
            // })

         })
         .catch(function (error) {
            console.log(error);
         });
   }

   handleInputChange() {

   }

   profileSubmit(e) {
      /* eslint no-restricted-globals: 0*/
      let user = this.state.username;
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
         "username": user,
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
                  <h2>Welcome {this.state.username}</h2>

                  <p>Update your profile information to begin connecting with coders from around the world.</p>
               </div>
               <div className="main">
                  <form className="auth-form">

                     <Fields fields={this.state.fields} changed={this.handleInputChange} />

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

                     <div className="form-group mb-0">
                        <a href={`${process.env.PUBLIC_URL}/home`} className="btn-theme" id="prof-home-btn">Go Back</a>
                     </div>

                  </form>
               </div>
            </div>
         </section>
      );
   }
}


export default Profiles;