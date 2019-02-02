import React from 'react';
import Login from '../../components/passport/login'
import Registration from '../../components/passport/registration'




class passportPage extends React.Component {

    state = {
        isExistingUser: false,
        registerWithProfile: false
    }

    toggleUser(self) {
        let user = !self.state.isExistingUser
        self.setState({ isExistingUser: user });
    }

    toggleRegisterProfile(self) {
        let register = !self.state.registerWithProfile
        self.setState({ registerWithProfile: register });
    }

    toggleExistingUser() {
        this.setState({ isExistingUser: true })
    }

    render() {
        let isExistingUser = this.state.isExistingUser;
        if (this.props.loginPage) {
            isExistingUser = true;
        }

        document.body.classList.remove('inner-page');
        return (<div>
            {isExistingUser ? <Login toggleExistingUser={this.toggleExistingUser} login={this.props.login} toggleUser={this.toggleUser} self={this} /> : <Registration register={this.state.registerWithProfile} toggleUser={this.toggleUser} toggleProfile={this.toggleRegisterProfile} self={this} />}
        </div>
        );
    }
}


export default passportPage;