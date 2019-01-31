
import React from 'react';
import Register from '../../components/passport/register'
import RegisterProfile from '../../components/passport/registerProfile'


class Registration extends React.Component {




    render() {

        return (<div>
            {this.props.register
                ? <RegisterProfile login={this.props.login} toggleUser={this.props.toggleUser} toggleProfile={this.props.toggleProfile} self={this.props.self} />
                : <Register login={this.props.login} toggleUser={this.props.toggleUser} toggleProfile={this.props.toggleProfile} self={this.props.self} />
            }
        </div>
        )
    }
}


export default Registration;