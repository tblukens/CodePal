
import React from 'react';
import Passport from '../../utility/Passport'
import axios from 'axios'
class Register extends React.Component {
    userSubmit = (e) => {
        let self = this;
        /* eslint no-restricted-globals: 0*/
        const $ = window.$;
        e.preventDefault();
        let user = {}

        let values = [
            'username',
            'password',
            'firstName',
            'lastName',
            'skills',
            'designation',
            'photo',
            'location',
            'photo',
            'shortBio',
            // 'lastLogin',
            'logOfActivity',
            'facebook',
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
        today();


        Passport.register(user)
            .then((response) => {

                if (response.data.name === "UserExistsError") {
                    alert('User already exists.  Please choose another username')
                    return
                }

           
                axios({
                    url: '/api/users/add',
                    method: 'post',
                    data: user
                 })
                    .then((response) => {
                       alert("Profile Updated Successfully!")
                       self.props.toggleUser(self.props.self)
                       return
                    })
                    .catch(function (error) {
                       console.log(error);
                    });
           

                // alert('User is now registered')

            })
            .catch(function (error) {
                console.log(error);
            });
        function update(value) {
            let id = `#${value}`;
            let data = $(id).val();
            if (data) {
                user[value] = data;
            }
        }
        function today() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }

            today = mm + '/' + dd + '/' + yyyy;
            user['joinDate'] = (today);

        }
    }



    render() {

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
                        <h2>Register Your Account</h2>

                        <p>Already have an account?  <a onClick={() => this.props.toggleUser(this.props.self)}>Please login here. </a></p>
                    </div>
                    <div className="main">
                        <form className="auth-form" >
                            <div className="form-group">
                                <label htmlFor="username">User Name</label>
                                <i className="fa fa-user"></i>
                                <input required="" name="username" type="text" className="form-control" id="username" placeholder="Enter Username" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <i className="fa fa-user"></i>
                                <input required="" name="password" type="text" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <p>Change your mind?  <a onClick={() => this.props.toggleProfile(this.props.self)}>Click here to register with Username and Password only. </a></p>

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
                                <label htmlFor="photo">Photo</label>
                                <i className="fa fa-user"></i>
                                <input required="" name="photo" type="text" className="form-control" id="photo" placeholder="Photo" />
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
                                <button className="btn-theme" onClick={this.userSubmit} type="submit">Register</button>
                            </div>

                        </form>
                        <br></br>
                        <div className="form-group mb-0">
                            <button className="btn-theme" href="/">Cancel</button>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}


export default Register;