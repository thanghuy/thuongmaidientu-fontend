import React, { Component } from 'react';
import { connect } from 'react-redux';
import Info from '../components/DetailsItem/InforProduct';
import * as action from '../action/addCart';
class AddCart extends Component {
    render() {
        var {dataCart,AddCartFinish} = this.props;
        return (
                <Info dataCart={dataCart} AddCartFinish={AddCartFinish}/>
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
        AddCartFinish : () => {
            dispatch(action.AddCart())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddCart);