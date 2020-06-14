import React, { Component } from 'react'
import HeaderAdmin from '../../modules/HeaderA/index';
import MenuLeft from '../../modules/MenuLeftA/index';
import '../../assets/cssAdmin/adminlte.min.css'
import {withRouter} from 'react-router-dom';
import * as authService from '../services/AuthService';
import LoginAdmin from './LoginAdmin';
import { connect } from 'react-redux';
import * as action from '../../action/Login';
class MainLayOut extends Component {
  getUserOidc = async () => {
    var res = await authService.getUser();
    var isLogin = !!res;
    if(isLogin === true){
        this.setUserName(res.profile)
        this.setCookie(res.access_token)
        this.props.UpdateUser(res.profile)
    }
  };
  setCookie = access_token => {
      localStorage.setItem("token",access_token);
  }
  setUserName(data){
      localStorage.setItem("userName",JSON.stringify(data));
  }
  componentDidMount(){
    this.getUserOidc()
  }
  render() {
    var {userName} = this.props;
    if(userName !== null){
      return (
        <div id="page-top">
          <div className="wrapper">
            <MenuLeft/>
            <HeaderAdmin/>
            <div className="content-wrapper">
                <div className="container-fluid">
                  {this.props.children}
                </div>
            </div>
          </div>
        </div>
      )
    }
    else{
      return (
        <LoginAdmin/>
      )
    }
  }
}
const mapStateToProps = state => {
  return {
      userName : state.userName
  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return {
      UpdateUser : (dataUsername) => {
          dispatch(action.UserName(dataUsername))
      }
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainLayOut));