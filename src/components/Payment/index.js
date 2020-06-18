import React, { Component } from 'react';
import '../../assets/css/payment.css';
import Visa from './FormVisa';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_6o7pM7P9hjj5QYA9LanEBQai00ZlaGAWPH");
class index extends Component {
    render() {
        var {dataAddress} = this.props;
        return (
            <div className="col-lg-12">
                <div className="cart_container">
                    <div className="method-payment">
                        <div className="row">
                            <div className="list-mtpm col-12">
                                <span>
                                    <button type="button" className="btn-mtpm active-mtpm">Thanh toán qua thẻ ATM</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Elements stripe={stripePromise}>
                    <Visa dataAddress={dataAddress}/>
                </Elements>
            </div>
        );
    }
}

export default index;