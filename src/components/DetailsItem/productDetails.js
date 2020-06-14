import React, { Component } from 'react';

class productDetails extends Component {
    render() {
        var {OneProduct} = this.props;
        return (
            <div className="product_detail">
                <div className="detail_title">Chi tiết sản phẩm</div>
                <div className="detail_content">
                    <p>{OneProduct.content}</p>
                </div>
            </div>
        );
    }
}

export default productDetails;