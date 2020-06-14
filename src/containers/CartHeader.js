import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartHeader from '../components/Header/CartHeader';
import * as action from '../action/addCart';
class AddCart extends Component {
    render() {
        var {dataCart} = this.props;
        return (
                <CartHeader dataCart={dataCart} />
        );
    }
}
const mapStateToProps = state => {
    return {
        dataCart : state.dataCart
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        AddCartFinish : (dataCart) => {
            dispatch(action.AddCart(dataCart))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddCart);