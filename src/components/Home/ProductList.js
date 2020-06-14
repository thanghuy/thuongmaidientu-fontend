import React, { Component } from 'react';
import Product from './product';
class ProductList extends Component {
    render() {
        return (
            <div className="new_arrivals">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <div className="tabbed_container">
                        <div className="tabs clearfix tabs-right">
                            <div className="new_arrivals_title">Sản phẩm nổi bật</div>
                            <ul className="clearfix">
                            <li className="active">Featured</li>
                            <li>Audio &amp; Video</li>
                            <li>Laptops &amp; Computers</li>
                            </ul>
                            <div className="tabs_line">
                            <span />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            {/* Product Panel */}
                            <div className="product_panel panel">
                                {/* Slider Item */}
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                                <div className="arrivals_slider_dots_cover" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default ProductList;