/* eslint no-restricted-globals: 0*/
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import request from "request";
import axios from 'axios';

const LOGIN_SUCCESS_PAGE = "/home";
const LOGIN_FAILURE_PAGE = "/";
const callback = process.env.callback;

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'codepal.auth0.com',
        clientID: 'xJDY4HM4Lv2zcmqzMlzjhUz1YpjbzBKc',
        redirectUri: callback||'http://localhost:3000/callback',
        audience: 'https://codepal.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    constructor() {
        this.login = this.login.bind(this);
    };

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {

        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                localStorage.setItem("auth_results", authResults);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            }
            else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log("error: " + err);
            }
        })
    }
    
    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
    
    logout() {
        alert("logging out");
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("auth_results");
        location.pathname = LOGIN_FAILURE_PAGE;
    }

    getProfile() {
        if (localStorage.getItem("id_token")) {
            let idToken = jwtDecode(localStorage.getItem("id_token"));
            const URL = 'http://localhost:3001/api/users/add'
            axios.post(URL, {
                user_id: idToken,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            localStorage.setItem("Auth0_Id", idToken.sub);
            return idToken
        }
        else return {};
    }

    updateMetaData(user, newData, accessToken) {
        let options = {
            method: "PATCH",
            url: 'https://codepal.auth0.com/api/v2/users/' + user,
            headers:
            {
                'content-type': 'application/json',
                authorization: 'Bearer ' + accessToken
            },
            body:
                { user_metadata: newData },
            json: true
        };
        return request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log("patch : " + response);
            return response;
        });
    }

    getToken(cb) {
        console.log("getToken");
        var options = {
            method: 'POST',
            url: 'https://codepal.auth0.com/oauth/token',
            headers: { 'content-type': 'application/json' },
            body: '{"client_id":"9Y1fr7w39W3w93XxNMtJho5Y4wrWnAvF","client_secret":"Tl4DG2J1ffH47xIrwoGFor7FAr_uBLRqio6KLhUMuDhysAXB5viEgNuEsS9zBtOb","audience":"https://codepal.auth0.com/api/v2/","grant_type":"client_credentials"}'
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            body = (JSON.parse(body));
            const token = ((body.access_token));
            cb(token);
        });

    }
    
    getMetaData(user, accessToken, callback) {
        var options = {
            method: 'GET',
            url: 'https://codepal.auth0.com/api/v2/users/' + user,
            headers: { authorization: 'Bearer ' + accessToken }
        };

        return request(options, function (error, response, body) {
            if (error) throw new Error(error);

            callback(body);
        });
    }

} 