import React from 'react';
import '../../../assets/cssAdmin/login.css';
import {withRouter} from 'react-router-dom';
const MessageAddProduct = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5" style={{top : "30%"}}>
                    <div className="card-body">
                    <h5 className="card-title text-center">Bạn đã thêm sản phẩm thành công</h5>
                    <div className="form-signin">
                        <div className="form-label-group">
                        </div>
                        <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button" onClick={()=>props.history.push("/san-pham/all-product")}
                        >
                            Xem sản phẩm đã thêm
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default withRouter(MessageAddProduct);