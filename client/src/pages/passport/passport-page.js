import React from 'react';
import Login from '../../components/passport/login'
import Register from '../../components/passport/register'




class passportPage extends React.Component {

    state = {
        isExistingUser: false
    }

    toggleUser(self) {
        let user= !self.state.isExistingUser
        self.setState({ isExistingUser: user });
    }
    render() {
        const isExistingUser = this.state.isExistingUser;

        document.body.classList.remove('inner-page');
        return (<div>
            {isExistingUser ? <Login toggleUser={this.toggleUser} self={this} /> : <Register toggleUser={this.toggleUser} self={this} />}
        </div>
        );
    }
}


export default passportPage;