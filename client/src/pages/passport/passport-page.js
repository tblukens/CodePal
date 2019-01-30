import React from 'react';
import Login from '../../components/passport/login'
import Register from '../../components/passport/register'
import RegisterProfile from '../../components/passport/registerProfile'





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
            {isExistingUser ? <Login login={this.props.login} toggleUser={this.toggleUser} self={this} /> : <RegisterProfile toggleUser={this.toggleUser} self={this} />}
        </div>
        );
    }
}


export default passportPage;