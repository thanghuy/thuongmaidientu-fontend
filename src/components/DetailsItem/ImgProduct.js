import React, { Component } from 'react';
import imgde from '../../assets/images/bi-mat-hanh-trinh-tinh-yeu.jpg';
class ImgProduct extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
                    <ul className="image_list">
                    <li data-image="images/single_4.jpg">
                        <img src={imgde} alt="a" />
                    </li>
                    <li>
                        <img src={imgde} alt="a" />
                    </li>
                    <li data-image="images/single_3.jpg">
                        <img src="https://sachvui.com/cover/2019/nhung-mua-hoa-mai-no.jpg" alt="a" />
                    </li>
                    </ul>
                </div>
                <div className="col-lg-5 order-lg-2 order-1">
                    <div className="image_selected">
                    <img src="https://sachvui.com/cover/2019/nhung-mua-hoa-mai-no.jpg" alt="a" />
                    </div>
                </div>
                </div>
        );
    }
}

export default ImgProduct;