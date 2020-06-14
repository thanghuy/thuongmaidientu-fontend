import React, { Component } from 'react';
import ComProduct from '../components/product/index';
class Product extends Component {
    render() {
        var {match} = this.props;
        var categoryId = match.params.categoryId
        return (
            <ComProduct categoryId={categoryId}/>
        );
    }
}
export default Product;
