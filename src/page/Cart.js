import React, { Component } from 'react';
import ComCart from '../components/Cart/indexCart';
import CartEmpty from '../components/Cart/CartEmpty';
import { connect } from 'react-redux';
class Cart extends Component {
    render() {
        var {dataCart} = this.props;
        if(dataCart.length === 0){
            return (
                <div className="container">
                    <div className="topcart"></div>
                    <CartEmpty/>
                </div>
            )
        }
        else{
             return (
                 <ComCart/>
             );
        }
    }
}
const mapStateToProps = state => {
    return {
        dataCart : state.dataCart
    }
}
export default connect(mapStateToProps,null)(Cart);