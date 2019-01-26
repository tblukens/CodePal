const axios = require('axios');
let request = require("request");
let auth0 = require('auth0-js');
const db = require('../models');


module.exports = {

    getUsers: function (req, res) {
        console.log(req.body);
        db.User.find({})
            .then(dbUsers => res.json(dbUsers))
            .catch(err => console.log(err));


    },
    postUser: function (req, res) {
        console.log(req.body);
        userExists = db.User.findOne(req.body);
        console.log(userExists);
        if (!userExists) {
            db.User.create(req.body)
                .then(dbUser => res.json(dbUser))
                .catch(err => console.log("Error creating user."));
        }
    },


    //working fine, get user id from `req.body` rather than from api url
    updateMetaData: function (req, res) {
        console.log(req.body);
        //extract the following from the request: 
        let user = req.body.user_id;
        let newData = req.body.new_data;

        //get access token
        getTokenPromise.then(function (accessToken) {

            //get current profile info
            getCurrentProfile(user, accessToken).then(function (profile) {
                const newProfile = Object.assign(profile, newData); // this will start with the current Profile, and overwrite the values that need updated.
                let options = {
                    method: "PATCH",
                    url: 'https://codepal.auth0.com/api/v2/users/' + user,
                    headers:
                    {
                        'content-type': 'application/json',
                        authorization: 'Bearer ' + accessToken
                    },
                    body:
                        { user_metadata: newProfile },
                    json: true
                };
                request(options, function (error, response, body) {
                    if (error) throw new Error(error);

                    console.log("patch : " + response);
                    res.send(response);
                });
            })
        })
    },

    //working fine
    getMetaData: function (req, res) {
        console.log(req.params);
        let user = req.params.user_id;
        getTokenPromise.then(function (accessToken) {
            let options = {
                method: 'GET',
                url: 'https://codepal.auth0.com/api/v2/users/' + user,
                headers: { authorization: 'Bearer ' + accessToken }
            };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                res.json(response)
            });
        })
    },



    //not working, 400 error 
    createUser: function (req, res) {
        getTokenPromise.then(
            function (accessToken) {
                console.log("hello")
                let options = {
                    method: "POST",
                    url: 'https://codepal.auth0.com/api/v2/users/',
                    headers:
                    {
                        'content-type': 'application/json',

                        authorization: 'Bearer ' + accessToken
                    },
                    body: req.body,
                    json: true
                };

                request(options, function (error, response, body) {
                    if (error) throw new Error(error);

                    console.log(response.body);
                    res.send(response)
                })
            })
    }

}

//revised to function with .then()
let getTokenPromise = new Promise(function (resolve, reject) {
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
        resolve(token);
    });

});

let getCurrentProfile = function (user, accessToken) {
    return new Promise(function (resolve, reject) {
        let options = {
            method: 'GET',
            url: 'https://codepal.auth0.com/api/v2/users/' + user,
            headers: { authorization: 'Bearer ' + accessToken }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let profile = (JSON.parse(body).user_metadata);
            resolve(profile)
        });
    })
}