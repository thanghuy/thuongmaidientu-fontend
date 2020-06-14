import React, { Component } from 'react';

class FormMomo extends Component {
    render() {
        return (
            <div className="visa-mt001">
                <form action="/" method="post">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputAddress2">Nhập số điện thoại đăng ký Momo</label>
                        <input type="text" className="form-control -fpm01" id="inputPhone" placeholder="Nhập số điện thoại" />
                    </div>
                    <div className="form-group col-md-6">
                        <button className="login" type="submit">Thanh toán</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormMomo;