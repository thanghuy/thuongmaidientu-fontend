import React from 'react';
import '../../assets/cssAdmin/main-style.css';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import * as action from '../../action/MenuAdmin'
const MenuLeft = (props) => {
    // const [state, setState] = useState({ activeDrop : false })
    const setActiveMenu = () =>{  
        props.setActive(!props.ActiveMenu)
    }
    var showDrop = props.ActiveMenu ? "block" : "none";
    var userName = JSON.parse(localStorage.getItem("userName"));
    if(userName !== null && userName.Role === "Customer"){
    return (
        <aside className="main-sidebar">
            <ul className="nav nav-pills flex-column" id="myTab" role="tablist">
                <li className="nav-item nav-item-admin dropdown">
                    <i className="fas fa-clipboard-list"/>
                    <NavLink className="nav-link" to="/quan-ly-don-hang" activeClassName="active-mn-left">Quản lý đơn hàng</NavLink>
                </li>
                <li className="nav-item nav-item-admin">
                    <i className="fas fa-shopping-bag" />
                    <span className="nav-link" onClick={setActiveMenu}>Quản Lý Sản Phẩm</span>
                    <i className="fas fa-angle-down"/>
                    <div className={`dropdown-menu-admin`} style={{display : showDrop}}>
                        <NavLink className="list-group-item" activeClassName="active-mn-left" to="/san-pham/all-product">Tất cả sản phẩm</NavLink>
                        <NavLink className="list-group-item" activeClassName="active-mn-left" to="/san-pham/add-new-product">Thêm sản phẩm</NavLink>
                    </div>
                </li>
                <li className="nav-item nav-item-admin">
                    <i className="fas fa-cog"/>
                    <NavLink className="nav-link disabled" activeClassName="active-mn-left" to="/quan-ly-shop">Thiết lập</NavLink>
                </li>
            </ul>
        </aside>
    );
    }
    else{
        return (
            <aside className="main-sidebar">
                <ul className="nav nav-pills flex-column" id="myTab" role="tablist">
                    <li className="nav-item nav-item-admin dropdown">
                        <i className="fas fa-clipboard-list"/>
                        <NavLink className="nav-link" activeClassName="active-mn-left" to="/quan-ly-don-hang">Quản lý đơn hàng</NavLink>
                    </li>
                    <li className="nav-item nav-item-admin">
                        <i className="fas fa-shopping-bag" />
                        <span className="nav-link" onClick={setActiveMenu}>Quản Lý Sản Phẩm</span>
                        <i className="fas fa-angle-down"/>
                        <div className={`dropdown-menu-admin`} style={{display : showDrop}}>
                            <NavLink className="list-group-item" activeClassName="active-mn-left" to="/san-pham/all-product">Tất cả sản phẩm</NavLink>
                            <NavLink className="list-group-item" to="/san-pham/add-new-product">Thêm sản phẩm</NavLink>
                        </div>
                    </li>
                    <li className="nav-item nav-item-admin">
                        <i className="fas fa-shopping-basket"/>
                        <NavLink className="nav-link disabled" activeClassName="active-mn-left" to="/quan-ly-shop">Quản lý user</NavLink>
                    </li>
                    <li className="nav-item nav-item-admin">
                        <i className="fas fa-user-circle"/>
                        <NavLink className="nav-link disabled" activeClassName="active-mn-left" to="/quan-ly-tai-khoan">Quản lý tài khoản</NavLink>
                    </li>
                    <li className="nav-item nav-item-admin">
                        <i className="fas fa-cog"/>
                        <NavLink className="nav-link disabled" activeClassName="active-mn-left" to="/thiet-lap">Thiết lập</NavLink>
                    </li>
                </ul>
            </aside>
        )
    }
}
const mapStateToProps = state => {
    return {
        ActiveMenu : state.ActiveMenu
    }
  }
  const mapDispatchToProps = (dispatch,props)=>{
    return {
        setActive : (value) => {
            dispatch(action.activeMenu(value))
        }
    }
  }
export default  connect(mapStateToProps,mapDispatchToProps)(MenuLeft);
