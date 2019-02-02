import React from 'react';
// import Auth from "../utility/Auth";
// import request from "request";
// let auth = new Auth();


class Profile  {
      render() {

      // var options = { method: 'POST',
      //   url: 'https://codepal.auth0.com/oauth/token',
      //   headers: { 'content-type': 'application/json' },
      //   body: '{"client_id":"9Y1fr7w39W3w93XxNMtJho5Y4wrWnAvF","client_secret":"Tl4DG2J1ffH47xIrwoGFor7FAr_uBLRqio6KLhUMuDhysAXB5viEgNuEsS9zBtOb","audience":"https://codepal.auth0.com/api/v2/","grant_type":"client_credentials"}' };

      // request(options, function (error, response, body) {
      //   if (error) throw new Error(error);
      //    body = (JSON.parse(body));
      //  const token = ((body.access_token));
      // });


      return (

         <div className="form-group">
            <label htmlFor={this.props.key}>{this.props.placeholder}</label>
            <i className="fa fa-user"></i>
            <input onChange={this.props.onChange} required="" name={this.props.key} type="text" className="form-control" id={this.props.key} placeholder={this.props.value} />
            <button>Edit</button>
         </div>
      );
   }
}


export default Profile;