import React, { Component } from 'react';
import SignUp from '../containers/SignUp'
class Signup extends Component {
    render() {
        var { status,SignUpFinish} = this.props;
        return (
            <div className="container">
                <SignUp status={status} SignUpFinish={SignUpFinish}/>
            </div>
        );
    }
}

export default Signup;