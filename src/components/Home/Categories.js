import React, { Component } from 'react'
import popular_1 from '../../assets/images/popular_1.png';
import popular_2 from '../../assets/images/popular_2.png';
export default class Categories extends Component {
    render() {
        return (
            <div className="container">
                <div className="popular_categories">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="popular_categories_title">Danh mục nổi bật</div>
                    </div>
                    <div className="col-lg-12">
                        <div className="popular_categories_slider_container">
                        <div className="owl-carousel owl-theme popular_categories_slider">
                            <div className="owl-item">
                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                <div className="popular_category_image">
                                <img src={popular_1} alt="b" />
                                </div>
                                <div className="popular_category_text">
                                Sách 1
                                </div>
                            </div>
                            </div>
                            <div className="owl-item">
                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                <div className="popular_category_image">
                                <img src={popular_2} alt="b" />
                                </div>
                                <div className="popular_category_text">
                                Sách 2
                                </div>
                            </div>
                            </div>
                        </div>
                        <span className="prev-ca">
                        ❮
                        </span>
                        <span className="next-ca">
                        ❯
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}
