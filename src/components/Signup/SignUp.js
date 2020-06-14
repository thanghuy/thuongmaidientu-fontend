import React, { Component } from 'react';
import * as message from '../../constant/message';
import axios from 'axios';
import { Redirect ,withRouter} from 'react-router-dom';
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            RePass : "",
            phoneNumber : "",
            messagesUser : "",
            messagePass : "",
            messagePhone : "",
            messageRePass : "",
            success : null,
            error1 : null,
            error2 : null,
            error3 : null,
            error4 : null,
        }
    }
    handelChangeUser = e =>{
        var user =  e.target.value;
        if(user === ""){
            this.setState({
                messagesUser : message.EmptyInput,
                error1 : true
            })
        }
        else if(!isNaN(user)){
            this.setState({
                messagesUser : message.RuleUser1,
                error1 : true
            })
        }
        else if(user.length < 2 || user.length > 50){
            this.setState({
                messagesUser : message.RuleUser,
                error1 : true
            })
        }
        else{
            this.setState({
                username : user,
                error1 : false
            })
        }
    }
    handelChangePhone = e =>{
        var PhoneNumber =  e.target.value;
        const phoneRG=/^[0][1-9][0-9]{8}$/;
        if(PhoneNumber === ""){
            this.setState({
                messagePhone : message.EmptyInput,
                error2 : true
            })
        }
        else if(phoneRG.test(PhoneNumber)===false){
            this.setState({
                messagePhone : message.RulePhoneNumber,
                error2 : true
            }) 
        }
        else{
            this.setState({
                phoneNumber : PhoneNumber,
                error2 : false
            })
        }
    }
    handelChangePass = e =>{
        var passWord =  e.target.value;
        if(passWord === ""){
            this.setState({
                messagePass : message.EmptyInput,
                error3 : true
            })
        }
        else if(passWord.length < 6){
            this.setState({
                messagePass : message.Rulepass,
                error3 : true
            })
        }
        else{
            this.setState({
                password : passWord,
                error3 : false
            })
        }
    }
    handelChangeRePass = e =>{
        var Repass=  e.target.value;
        if(Repass === ""){
            this.setState({
                messageRePass : message.EmptyInput,
                error4 : true
            })
        }
        else if(Repass !== this.state.password){
            this.setState({
                messageRePass : message.RuleRePass,
                error4 : true
            })
        }
        else{
            this.setState({
                RePass : Repass,
                error4 : false
            })
        }
    }
    setRegister = async () =>{
        var {username,phoneNumber,password,RePass} = this.state;
        return await axios({
            method: 'POST',
            url: 'https://localhost:5000/api/account/register',
            data: {
                Fullname : username,
                Phonenumber: phoneNumber,
                Password : password,
                Confirmpassword : RePass
            }
          }).then(resp =>{
            this.setState({
                success : resp.data.success
            })
          }).catch(err =>{
              console.log(err);
          })
    }
    getdataLogin = async () =>{
        var {phoneNumber,password} = this.state;
        return await axios({
            method: 'POST',
            url: 'https://localhost:5000/api/account/login',
            data: {
                PhoneNumber : phoneNumber,
                Password : password
            }
          }).then(resp =>{
              this.setCookie(resp.data.token.access_token)
              this.setUserName(resp.data.data.user)
          }).catch(err =>{
              console.log(err);
          })
    }
    setUserName(data){
        localStorage.setItem("userName",JSON.stringify(data));
    }
    SignupUser = e =>{
        e.preventDefault();
        var { SignUpFinish } = this.props;
        var {error1,error2,error3,error4,success} = this.state;
        if(!error1 && !error2 && !error3 && !error4){
            this.setRegister()
        }
        if(!success){
            this.setState({
                error2 : true,
                messagePhone : message.RulePhoneAlready
            })
            SignUpFinish();
        }
        if(!error1 && !error2 && !error3 && !error4 && success){
            this.getdataLogin();
            this.props.history.goBack()
        }
    }
    setCookie = access_token => {
        document.cookie = "token="+access_token+"; expires=3600";
    }
    render() {
        var {messagesUser,messagePass,messagePhone,messageRePass,error1,error2,error3,error4} = this.state;
        let errors = error1 ? "block" : null;
        let active = error1 ? "form-control is-invalid" : "";
        let errors2 = error2 ? "block" : null;
        let active2 = error2 ? "form-control is-invalid" : "";
        let errors3 = error3 ? "block" : null;
        let errors4 = error4 ? "block" : null;
        let active3 = error3 ? "form-control is-invalid" : "";
        let active4 = error4 ? "form-control is-invalid" : "";
        if(localStorage.getItem("userName") !== null){
            return <Redirect path="/" />
        }
        return (
            <div className="signup-m01">
                <div className="title-dk-01">Chào mừng bạn đến với trang đăng ký</div>
                <form className="" action="/" method="post">
                    <div className="container">
                        <div className="form-left">
                            <div className="space-input">
                                <input className={`username ${active}`} type="text" placeholder="Nhập họ và tên" name="username" 
                                    onChange={this.handelChangeUser}
                                />
                                <div className="invalid-feedback" style={{display : errors}}>
                                    {messagesUser}
                                </div>
                            </div>
                            <div className="space-input">
                                <input className={`pass ${active2}`} type="text" placeholder="Nhập số điện thoại" name="phoneNumber" 
                                    onChange={this.handelChangePhone}
                                />
                                <div className="invalid-feedback" style={{display : errors2}}>
                                    {messagePhone}
                                </div>
                            </div>
                            <div className="space-input">
                                <input className={`pass ${active3}`} type="password" placeholder="Nhập mật khẩu" name="password" 
                                    onChange={this.handelChangePass}
                                />
                                <div className="invalid-feedback" style={{display : errors3}}>
                                    {messagePass}
                                </div>
                            </div>
                            <div className="space-input">
                                <input className={`pass ${active4}`} type="password" placeholder="Nhập lại mật khẩu" 
                                    name="Repassword" 
                                    onChange={this.handelChangeRePass}
                                />
                                <div className="invalid-feedback" style={{display : errors4}}>
                                    {messageRePass}
                                </div>
                            </div>
                        </div>
                        <div className="form-right">
                            <button className="login" type="button" onClick={this.SignupUser}>Đăng ký</button>
                            <button className="login lg-facebook" type="submit">
                                <i className="fab fa-facebook"></i>&ensp;Facebook
                            </button>
                            <button className="login lg-google" type="submit">
                                <i className="fab fa-google"></i>&ensp;Google
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignUp);