import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router';

import axios from 'axios';

class Login extends React.Component {

    state = {
        redirect: false,
        loginError: false
    }
    userLogin=(e)=> {
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
            url: '/api/accounts/login',
            method: 'post',
            data: user
        })
            .then((response) => {
                if (response.data === "authenticated") {
                    self.setState({ redirect: true })
                }
                else{
                    self.setState({ loginError: true })
                }
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

        if (this.state.redirect) {
            return <Redirect to="/home" />
        }
        
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
                        <h2>Login To Your Account</h2>

                        <p>Welcome to CodePal. Please log-in here.</p>
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
                                <button className="btn-theme" onClick={this.userLogin} type="submit">Login</button>
                            </div>

                        </form>
                        <br></br>
                        {this.state.loginError?<p>Incorrect Username or Password</p>:''}
                        <div className="form-group mb-0">
                            <button className="btn-theme" href="/">Cancel</button>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}


export default Login;