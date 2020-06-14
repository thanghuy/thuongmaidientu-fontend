import React from 'react';
import '../../assets/cssAdmin/login.css';
import * as auth from '../services/AuthService';
const LoginAdmin = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body" style={{background : "white"}}>
                    <h5 className="card-title text-center">Bạn chưa đăng nhập !!!</h5>
                    <div className="form-signin">
                        <div className="form-label-group">
                        </div>
                        <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button" onClick={()=>auth.login()}
                        >
                            Tiến hành đăng nhập
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default LoginAdmin;