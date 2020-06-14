import React, { Component } from 'react';

class Brands extends Component {
    render() {
        return (
            <div className="brands">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <div className="brands_slider_container">
                        {/* Brands Slider */}
                        <div className="owl-carousel owl-theme brands_slider">
                            <div className="owl-item">
                            <div className="brands_item d-flex flex-column justify-content-center">
                                <img src="images/brands_1.jpg" alt="k" />
                            </div>
                            </div>
                            <div className="owl-item">
                            <div className="brands_item d-flex flex-column justify-content-center">
                                <img src="images/brands_2.jpg" alt="k" />
                            </div>
                            </div>
                            <div className="owl-item">
                            <div className="brands_item d-flex flex-column justify-content-center">
                                <img src="images/brands_3.jpg" alt="k" />
                            </div>
                            </div>
                            <div className="owl-item">
                            <div className="brands_item d-flex flex-column justify-content-center">
                                <img src="images/brands_4.jpg" alt="k" />
                            </div>
                            </div>
                            <div className="owl-item">
                            <div className="brands_item d-flex flex-column justify-content-center">
                                <img src="images/brands_5.jpg" alt="k" />
                            </div>
                            </div>
                            <div className="owl-item">
                            <div className="brands_item d-flex flex-column justify-content-center">
                                <img src="images/brands_6.jpg" alt="k" />
                            </div>
                            </div>
                            <div className="owl-item">
                            <div className="brands_item d-flex flex-column justify-content-center">
                                <img src="images/brands_7.jpg" alt="k" />
                            </div>
                            </div>
                            <div className="owl-item">
                            <div className="brands_item d-flex flex-column justify-content-center">
                                <img src="images/brands_8.jpg" alt="k" />
                            </div>
                            </div>
                        </div>
                        {/* Brands Slider Navigation */}
                        <div className="brands_nav brands_prev">
                            <i className="fas fa-chevron-left" />
                        </div>
                        <div className="brands_nav brands_next">
                            <i className="fas fa-chevron-right" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Brands;