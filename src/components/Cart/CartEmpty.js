import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/notfound.css';
import cartEmpty from '../../assets/images/giohangtrong.png'
const style = {
    background : "white",
    height : "400px",
    marginTop : "10px",
    marginBottom : "10px",
    boxShadow : "0 1px 3px 0 rgba(0,0,0,.2)"
}
class CartEmpty extends Component {
    render() {
        return (
            <div className="container" style={style}>
                <div className="row">
                    <div className="col-md-12">
                    <div className="error-template">
                        <img src={cartEmpty} alt="empty"/>
                        <div className="error-actions">
                        <Link to="/" className="btn btn-primary btn-lg" style={{marginLeft : "14px"}}>
                            <span className="glyphicon glyphicon-home"/>
                            Tiếp tục mua sắm
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default CartEmpty;