import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');
const FormVisa =()=>{
    return (
        <div className="visa-mt001">
            <form action="/" method="post">
                <div className="form-group col-md-12">
                    <div className="row">
                        <div className="-formtt01 col-md-5">
                            Thanh toán qua thẻ
                        </div>
                        <label className="fname col-md-3">Chấp nhận thẻ</label>
                        <div className="icon-form01 col-md-4">
                            <i className="fab fa-cc-visa" style={{color:"navy"}}></i>
                            <i className="fab fa-cc-amex" style={{color:"blue"}}></i>
                            <i className="fab fa-cc-mastercard" style={{color:"red"}}></i>
                            <i className="fab fa-cc-discover" style={{color:"orange"}}></i>
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputAddress2">Số thẻ</label>
                    <input type="text" className="form-control -fpm01" id="inputPhone" placeholder="Nhập số thẻ" />
                </div>
                <div className="form-row col-md-12">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputPassword4">Nhập số thẻ</label>
                        <Elements stripe={stripePromise}>
                            <CardElement/>
                        </Elements>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <button className="login" type="submit">Thanh toán</button>
                </div>
            </form>
        </div>
    );
}

export default FormVisa;