import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpCom from '../components/Signup/SignUp';
import * as action from '../action/SignUp';
class SignUp extends Component {
    render() {
        var {SignUpFinish} = this.props;
        return (
                <SignUpCom SignUpFinish={SignUpFinish}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        status : state.status
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        SignUpFinish : () => {
            dispatch(action.status())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);