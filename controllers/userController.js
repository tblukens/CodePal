const axios = require('axios');
let request = require("request");

module.exports = {

    //working fine, get user id from `req.body` rather than from api url
    updateMetaData: function (req, res) {
        //extract the following from the request: 
        let user = req.body.user_id;
        let newData = req.body.new_data;
        getTokenPromise.then(function (accessToken) {

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
            request(options, function (error, response, body) {
                if (error) throw new Error(error);

                console.log("patch : " + response);
                res.send(response);
            });
        })
    },

    //working fine
    getMetaData: function (req, res) {
        let user = req.body.user_id;
        getTokenPromise.then(function (accessToken) {
            let options = {
                method: 'GET',
                url: 'https://codepal.auth0.com/api/v2/users/' + user,
                headers: { authorization: 'Bearer ' + accessToken }
            };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                res.send(response)
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
