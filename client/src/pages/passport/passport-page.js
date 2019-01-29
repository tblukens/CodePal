import React from 'react';
import Login from '../../components/passport/login'
import Register from '../../components/passport/register'



// extends layout

// block content
//   .container
//     if (!user)
//       a(href="/login") Login
//       br
//       a(href="/register") Register
//     if (user)
//       p You are currently logged in as #{user.username}
//       a(href="/logout") Logout



class passportPage extends React.Component {
    render() {
        document.body.classList.remove('inner-page');
        return (
            <section className="p-0">
                2 COMPONENTS:

                LOGIN:
                <Login />


                REGISTER: 
                <Register />
            </section>
        );
    }
}


export default passportPage;