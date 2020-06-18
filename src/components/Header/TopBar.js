import React, { Component } from 'react';
import {Link} from "react-router-dom"; 
// import mail from '../../../images/mail.png';
import sigup from '../../assets/images/user.png';
import Login from './Login';
import * as authService from '../../common/services/AuthService';
import CallAPi from '../../utils/ApiToken';
class TopBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showForm : true,
            active : false,
            status : false,
            dataUser : ""
        }
    }
    getCart = (token) =>{
        CallAPi("cart/","GET",null,token).then(resp =>{
            this.props.UpdateCartRed(resp.data.data.items)
        })
    }
    getUserOidc = async () => {
        var res = await authService.getUser();
        var isLogin = !!res;
        if(isLogin === true){
            this.setState({
                status : true,
                dataUser : res.profile
            })
            this.setUserName(res.profile)
            this.setCookie(res.access_token)
            // this.props.UpdateCartRed()
            this.props.UpdateUser(res.profile)
            this.getCart(res.access_token)

        }
        else{
            this.setState({
                status : false
            });
        }
      };
    componentDidMount(){
        this.getUserOidc();
    }
    setCookie = access_token => {
        localStorage.setItem("token",access_token);
    }
    getCookie = name =>{
        localStorage.getItem(name);
    }
    setUserName(data){
        localStorage.setItem("userName",JSON.stringify(data));
    }
    // setIsLogin =()=>{
    //     if(this.state.dataUser === ""){
    //         authService.login()
    //     }
    //     else{
    //         window.open("/admin")
    //     }
    // }
    render(){
        var {active,dataUser,status} = this.state;
        var data = dataUser;
        let element =  active ? "block" : "none";
        let showSpan = ""
        if(!status && data === ""){
            showSpan = (
                <div className="top_bar_user">
                    <div className="user_icon"><img src={sigup} alt="user"></img></div>
                    <div><span onClick={() =>  authService.login()}>Đăng nhập</span></div>
                </div>
            ) 
        }
        else{
            showSpan = (
                <div className="top_bar_user">
                    <div className="user_icon"><img src={sigup} alt="user"></img></div>
                    <div className="user-name-us01">
                        <span>{data.Fullname}</span>
                        <div className="dropdown-content-us01">
                            <Link to="/user/profile">Tài khoản</Link>
                            <Link to="/user/order">Đơn hàng</Link>
                            <span onClick={() => authService.logout()}>Đăng xuất</span>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                    <div className="col d-flex flex-row">
                        <div className="top_bar_contact_item">
                            <span onClick={()=>  window.open("/admin")} style={{cursor : "pointer"}}>Kênh người bán</span>
                        </div>
                        <div className="top_bar_contact_item">
                            {/* <div className="top_bar_icon">
                                <img src={mail} alt="mail"></img>
                            </div> */}
                        <Link to="huythang0903@gmail.com">Liên hệ shop</Link></div>
                        <div className="top_bar_content ml-auto">
                            <div className="top_bar_menu">
                                <ul className="standard_dropdown top_bar_dropdown">
                                <li>
                                    <Link to="/">Thông báo<i className="fas fa-chevron-down"></i></Link>
                                </li>
                                <li>
                                    <Link to="/">Tiếng Việt<i className="fas fa-chevron-down"></i></Link>
                                    <ul>
                                    <li><Link to="/">Tiếng Anh</Link></li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                            {showSpan}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="modal" style={{display : element}}>
                    <div className="modal-content animate">
                        <div className="imgcontainer">
                            <span className="close" title="Close Modal" onClick={this.closeFrom}>&times;</span>
                        </div> 
                        <ul className="nav tablink">
                            <li className="nav-item">
                                <Link className={`nav-link`} to="/signup" onClick={this.closeFrom}>ĐĂNG KÝ</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">ĐĂNG NHẬP</span>
                            </li>
                        </ul> 
                        <Login setStatus={this.getStatus}/>
                    </div>
                </div>		
            </div>
        );
    }
}

export default TopBar;
