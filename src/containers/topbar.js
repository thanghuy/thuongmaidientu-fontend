import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from '../components/Header/TopBar';
import * as action from '../action/addCart';
import * as actionl from '../action/Login';
// import * as action from '../action/SignUp';
class Header extends Component {
    render() {
        var { userName, UpdateCartRed,UpdateUser} = this.props;
        return (
            <TopBar userName={userName} UpdateCartRed={UpdateCartRed}
                UpdateUser={UpdateUser}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        userName : state.userName
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        UpdateCartRed : (dataCart) => {
            dispatch(action.AddCart(dataCart))
        },
        UpdateUser : (dataUsername) => {
            dispatch(actionl.UserName(dataUsername))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);