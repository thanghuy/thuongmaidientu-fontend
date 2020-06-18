import React, { Component } from 'react';
import '../../assets/css/payment.css';
import { connect } from 'react-redux';
// import * as action from '../../action/address';
import FormAddress from './FormAddress';
import ShowAddress from './ShowAddress';
import MethodPayment from '../Payment/index';
import Order from './InfoPayment';
import callApi from '../../utils/api5003';
class indexOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAddress : "",
            activeform : false,
            activeform1 : false,
            activeform2 : false
        }
    }
    activeForm= () =>{
        this.setState({
            activeform : true,
            activeform1 : true,
            activeform2 : false
        })
    }
    activeForm1= () =>{
        this.setState({
            activeform : true,
            activeform1 : true,
            activeform2 : false
        })
    }
    activeForm2 = () =>{
        this.setState({
            activeform : true,
            activeform1 : false,
            activeform2 : true
        })
    }
    closeFrom = ()=>{
        this.setState({
            activeform : false 
        })
    }
    getAddress = async () =>{
        var token = localStorage.getItem("token");
        var resp = await callApi("/addressuser","GET",token,null)
        this.setState({
            dataAddress : resp.data.data
        })
    }
    setAddress =(success)=>{
        if(success){
            this.getAddress();
            this.setState({
                activeform : false
            })
        }
    }
    componentDidMount(){
        this.getAddress()    
    }
    ShowAddressMain =()=>{
        var {dataAddress} = this.state;
        var result = "";
        if(dataAddress !== ""){
            result = dataAddress.map((data,index) =>{
                if(data.isDefault){
                    return (
                        <div className="address-row" key={index}>
                            <div className="check-user-detail">
                                <p className="card-text">{data.fullName}&ensp;( {data.phoneNumber} )</p>
                            </div>
                            <div className="check-address"><p className="card-text" >{data.fullAddress}</p></div>
                            <div className="check-update-address" onClick={this.activeForm}>Sửa</div>
                        </div>
                    )
                }
                return result
            })
        }
        return result
    }
    render() {
        var {dataAddress} = this.state;
        let element =  this.state.activeform === true ? "block" : null;
        let showForm = "";
        var active1 = this.state.activeform1 ? "active-user" : "";
        var active2 = this.state.activeform2 ? "active-user" : "";
        if(this.state.activeform2){
            showForm = (
                <FormAddress setAddress={this.setAddress} dataAddress={dataAddress}/>
            )
        }
        else{
            showForm = (
                <ShowAddress dataAddress={dataAddress} setAddress={this.setAddress}/>
            )
        }
        return (
            <div className="cart_section">
            <div className="container">
                <div className="row main-payment">
                <div className="col-lg-8">
                    <div className="address-user">
                        <div className="card-body">
                            <h4 className="card-title"><i className='fas fa-map-marker-alt'/>&ensp;Địa chỉ nhận hàng</h4>
                        </div>
                        {this.ShowAddressMain()}
                    </div>
                    <div className="address-user">
                        <div className="card-body">
                            <h4 className="card-title"><i className="fas fa-shipping-fast"/>&ensp;Hình thức vận chuyển</h4>
                        </div>
                        <div className="address-row">
                            <div className="check-user-detail">
                                <p className="card-text">Chuyển phát tiêu chuẩn</p>
                            </div>
                            <div className="check-address">
                                <i className="fas fa-truck"/>&ensp;Dự kiến giao hàng 1-2 ngày trong nội thành
                            </div>
                        </div>
                    </div>
                    <div className="cart_container-pmt">
                        <div className="card-body">
                            <h4 className="card-title"><i className="fas fa-credit-card"/>&ensp;Phương thức thanh toán</h4>
                        </div>
                        <MethodPayment dataAddress={dataAddress}/>
                    </div>
                </div>
                    <Order dataCart={this.props.dataCart} dataAddress={dataAddress}/>
                </div>
            </div>
                <div className="modal" style={{display : element}}>
                    <div className="modal-content-pm animate">
                        <div className="imgcontainer">
                            <span className="close" title="Close Modal" onClick={this.closeFrom}>&times;</span>
                        </div>
                        <ul className="nav tablink">
                            <li className={`nav-item ${active1}`} onClick={this.activeForm1}>
                                <span className="nav-link"><i className="fas fa-home"/>&ensp;Địa chỉ nhận hàng</span>
                            </li>
                            <li className={`nav-item ${active2}`} onClick={this.activeForm2}>
                                <span className="nav-link"><i className="fas fa-plus"/>&ensp;Thêm địa chỉ mới</span>
                            </li>
                        </ul>
                        {showForm}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        dataCart : state.dataCart
    }
}
// const mapDispatchToProps = (dispatch,props)=>{
//     return {
//         getDataAddress : (data) => {
//             dispatch(action.Address(data))
//         }
//     }
// }
export default connect(mapStateToProps,null)(indexOrder);