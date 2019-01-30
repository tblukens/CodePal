
import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    userSubmit=(e)=> {
        let self = this;
        /* eslint no-restricted-globals: 0*/
        const $ = window.$;
        e.preventDefault();
        let user = {}

        let values = [
            'username',
            'password'
        ]

        values.forEach(value => {
            update(value)
        });


        axios({
            url: '/api/accounts/register',
            method: 'post',
            data: user
        })
            .then((response) => {
                alert('User is now registered')
                self.props.toggleUser(self.props.self)

            })
            .catch(function (error) {
                console.log(error);
            });
        function update(value) {
            let id = `#${value}`;
            let data = $(id).val().trim();
            if (data) {
                user[value] = data;
            }
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

                        <p>Already have an account?  <a onClick={()=>this.props.toggleUser(this.props.self)}>Please login here. </a></p>
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