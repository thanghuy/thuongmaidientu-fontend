import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: "",
            password: "",
            data : "",
            messagePhone : "",
            messagePass : "",
            success : false
          }
    }
    getdata = async () =>{
        var {phonenumber,password} = this.state;
        return await axios({
            method: 'POST',
            url: 'https://localhost:5000/api/account/login',
            data: {
                PhoneNumber : phonenumber,
                Password : password
            }
          }).then(resp =>{
              this.setState({
                  data : resp.data.data.user,
                  success : resp.data.success
              })
              this.setCookie(resp.data.token.access_token)
          }).catch(err =>{
              console.log(err);
          })
    }
    // deleteCookie = name =>{

    // }
    setCookie = access_token => {
        document.cookie = "token="+access_token+"; expires=3600";
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    
    handleSubmit  = async () => {
        await this.getdata();
        var {data,success} = this.state;
        if(data !== "" && success){
            this.setUserName(data);
            this.props.setStatus(success);
            var url = this.props.location.pathname === "/signup" ? this.props.history.goBack() : "";
            return url;
        }
    }
    setUserName(data){
        localStorage.setItem("userName",JSON.stringify(data));
    }
    render() {
        return (
            <div className="form-main-lg">
                <div className="container">
                    <div className="form-left">
                        <label htmlFor="uname">
                        <b>Số điện thoại & tên đăng nhập</b>
                        </label>
                        <input className="username" 
                        onChange={this.handleChange} type="text" 
                        placeholder="Nhập số điện thoại & tên đăng nhập" 
                        name="phonenumber" />
                        <label htmlFor="psw">
                        <b>Mật khẩu</b>
                        </label>
                        <input className="pass" onChange={this.handleChange} name="password" type="password" placeholder="Nhập mật khẩu"/>
                    </div>
                    <div className="form-right">
                        <button className="login" onClick={this.handleSubmit}>Đăng nhập</button>
                        <button className="login lg-facebook" type="submit">
                            <i className="fab fa-facebook"></i>&ensp;Facebook
                        </button>
                        <button className="login lg-google" type="submit">
                            <i className="fab fa-google"></i>&ensp;Google
                        </button>
                        <label>
                            <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
                            Nhớ mật khẩu
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);