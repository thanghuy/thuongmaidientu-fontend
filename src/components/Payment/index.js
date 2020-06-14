import React, { Component } from 'react';
import '../../assets/css/payment.css';
import Visa from './FormVisa';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm1 : false,
            activeForm2 : false,
            activeBt : false
        }
    }
    paymentN = ()=>{
        this.setState({
            activeForm1 : false,
            activeForm2 : false
        })
    }
    activeForm1 =()=>{
        this.setState({
            activeForm1 : true,
            activeForm2 : false
        })
    }
    setMomo = () =>{
        this.setState({
            activeForm1 : false,
            activeForm2 : true
        })  
    }
    render() {
        var {activeForm1,activeForm2} = this.state;
        var showFrom = "";
        if(activeForm1 === true && activeForm2 === false){
            showFrom = (
                <Visa/>
            )
        }
        var activeBt = activeForm1 === true || activeForm2 === true ? "" : "active-mtpm";
        return (
            <div className="col-lg-12">
                <div className="cart_container">
                    <div className="method-payment">
                        <div className="row">
                            <div className="list-mtpm col-12">
                                <span>
                                    <button type="button" className={`btn-mtpm ${activeBt}`} onClick={this.paymentN}>Thanh toán khi nhận hàng</button>
                                </span>
                                <span>
                                    <button type="button" className={`btn-mtpm ${activeForm1 ? "active-mtpm" : ""}`} onClick={this.activeForm1}>Thanh toán qua thẻ ATM</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {showFrom}
            </div>
        );
    }
}

export default index;