import React from 'react';
import '../../assets/css/manger-user.css';
import avatar from '../../assets/images/avatar.png'
import {Route,Link} from 'react-router-dom'
import Order from './Order/indexOrder';
import InforUser from './InfoUser';
const menus = [
    {
        name : 'Tài khoản của tôi',
        to : '/user/profile',
        icon : "fas fa-user",
        exact : true
    },
    {
        name : 'Đơn hàng',
        to : '/user/order',
        icon : "fas fa-clipboard-list",
        exact : false
    },
    {
      name : 'Ngân hàng',
      to : '/user/bank',
      icon : "fas fa-university",
      exact : false
    },
    {
      name : 'Địa chỉ',
      to : '/user/adress',
      icon : "fas fa-map-marker-alt",
      exact : false
    },
    {
      name : 'Đổi mật khẩu',
      to : '/user/change-pass-word',
      icon : "fas fa-sync",
      exact : false
    },
    {
        name : 'Thông báo',
        to : '/user/notifications',
        icon : "fas fa-bell",
        exact : false
    }
    
]
const MenuLink = ({lable,to,icon,activeOnlyWhenExact}) =>{
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match })=> {
      var active = match ? 'active-user-m' : '';
        return(
            <Link to={to} className={`list-group-item ${active}`}>
                <i className={icon}/><span>{lable}</span>
            </Link>
        )
      }}
      />
    )
  }
const Index =(props)=>{
    const setPageManager =()=>{
        var {match} = props;
        var params = match.params.nameManager;
        var result = "";
        switch(params){
            case 'order' : result = (<Order/>) ; break;
            case 'profile' : result = (<InforUser/>) ;break;
            default : return 0;
        }
        return result;
    }
    const showMenu = (menus) =>{
        var result = "";
        if(menus.length > 0){
            result = menus.map((menu,index) =>{
                return (
                <MenuLink key={index} icon={menu.icon} lable={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                );
            });
        }
        return result;
    }
    return (
        <div className="container d-flex" id="wrapper">
            <div id="sidebar-wrapper">
                <div className="sidebar-heading">
                    <img src={avatar} alt="Avatar" className="avatar"/>
                    <span className="nameuser">Nguyễn Huy Thắng</span>
                </div>
                <div className="list-group list-group-flush">
                    {showMenu(menus)}
                </div>
            </div>
            <div className="container-fluid" id="page-content-manager">
                <div className="container-manager">
                    {setPageManager()}
                </div>
            </div>
        </div>
    );
}

export default Index;