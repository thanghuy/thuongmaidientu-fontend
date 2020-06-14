import React, { Component } from 'react'
import best1 from '../../assets/images/sinh-ra-de-chay.jpg';
import { Link } from 'react-router-dom';
export default class ProductNew extends Component {
    render() {
        return (
            <div className="best_sellers">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <div className="tabbed_container">
                        <div className="tabs clearfix tabs-right">
                            <div className="new_arrivals_title">Top khuyến mãi</div>
                            <ul className="clearfix">
                            <li className="active">Top 20</li>
                            <li>Audio &amp; Video</li>
                            <li>Laptops &amp; Computers</li>
                            </ul>
                            <div className="tabs_line">
                            <span />
                            </div>
                        </div>
                        <div className="bestsellers_panel panel">
                            {/* Best Sellers Slider */}
                            <div className="bestsellers_slider slider">
                            {/* Best Sellers Item */}
                            <Link to="/product">
                            <div className="bestsellers_item discount">
                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                <div className="bestsellers_image">
                                    <img src={best1} alt="t" />
                                </div>
                                <div className="bestsellers_content">
                                    <div className="bestsellers_category">
                                        <p >Headphones</p>
                                    </div>
                                    <div className="bestsellers_name">
                                    <p to="product.html">Xiaomi Redmi Note 4</p>
                                    </div>
                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    </div>
                                    <div className="bestsellers_price discount">
                                    $225<span>$300</span>
                                    </div>
                                </div>
                                </div>
                                <div className="bestsellers_fav active">
                                <i className="fas fa-heart" />
                                </div>
                                <ul className="bestsellers_marks">
                                <li className="bestsellers_mark bestsellers_discount">
                                    -25%
                                </li>
                                <li className="bestsellers_mark bestsellers_new">new</li>
                                </ul>
                            </div>
                            </Link>
                            {/* Best Sellers Item */}
                            <div className="bestsellers_item discount">
                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                <div className="bestsellers_image">
                                    <img src={best1} alt="t" />
                                </div>
                                <div className="bestsellers_content">
                                    <div className="bestsellers_category">
                                    <Link to="/">Headphones</Link>
                                    </div>
                                    <div className="bestsellers_name">
                                    <Link to="product.html">Samsung J730F...</Link>
                                    </div>
                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    </div>
                                    <div className="bestsellers_price discount">
                                    $225<span>$300</span>
                                    </div>
                                </div>
                                </div>
                                <div className="bestsellers_fav">
                                <i className="fas fa-heart" />
                                </div>
                                <ul className="bestsellers_marks">
                                <li className="bestsellers_mark bestsellers_discount">
                                    -25%
                                </li>
                                <li className="bestsellers_mark bestsellers_new">new</li>
                                </ul>
                            </div>
                            {/* Best Sellers Item */}
                            <div className="bestsellers_item">
                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                <div className="bestsellers_image">
                                    <img src={best1} alt="t" />
                                </div>
                                <div className="bestsellers_content">
                                    <div className="bestsellers_category">
                                    <Link to="/">Headphones</Link>
                                    </div>
                                    <div className="bestsellers_name">
                                    <Link to="product.html">Nomi Black White</Link>
                                    </div>
                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    </div>
                                    <div className="bestsellers_price discount">
                                    $225<span>$300</span>
                                    </div>
                                </div>
                                </div>
                                <div className="bestsellers_fav">
                                <i className="fas fa-heart" />
                                </div>
                                <ul className="bestsellers_marks">
                                <li className="bestsellers_mark bestsellers_discount">
                                    -25%
                                </li>
                                <li className="bestsellers_mark bestsellers_new">new</li>
                                </ul>
                            </div>
                            {/* Best Sellers Item */}
                            <div className="bestsellers_item discount">
                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                <div className="bestsellers_image">
                                    <img src={best1} alt="t" />
                                </div>
                                <div className="bestsellers_content">
                                    <div className="bestsellers_category">
                                    <Link to="/">Headphones</Link>
                                    </div>
                                    <div className="bestsellers_name">
                                    <Link to="product.html">Xiaomi Redmi Note 4</Link>
                                    </div>
                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    </div>
                                    <div className="bestsellers_price discount">
                                    $225<span>$300</span>
                                    </div>
                                </div>
                                </div>
                                <div className="bestsellers_fav">
                                <i className="fas fa-heart" />
                                </div>
                                <ul className="bestsellers_marks">
                                <li className="bestsellers_mark bestsellers_discount">
                                    -25%
                                </li>
                                <li className="bestsellers_mark bestsellers_new">new</li>
                                </ul>
                            </div>
                            {/* Best Sellers Item */}
                            <div className="bestsellers_item">
                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                <div className="bestsellers_image">
                                    <img src={best1} alt="t" />
                                </div>
                                <div className="bestsellers_content">
                                    <div className="bestsellers_category">
                                    <Link to="/">Headphones</Link>
                                    </div>
                                    <div className="bestsellers_name">
                                    <Link to="product.html">Xiaomi Redmi Note 4</Link>
                                    </div>
                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    </div>
                                    <div className="bestsellers_price discount">
                                    $225<span>$300</span>
                                    </div>
                                </div>
                                </div>
                                <div className="bestsellers_fav">
                                <i className="fas fa-heart" />
                                </div>
                                <ul className="bestsellers_marks">
                                <li className="bestsellers_mark bestsellers_discount">
                                    -25%
                                </li>
                                <li className="bestsellers_mark bestsellers_new">new</li>
                                </ul>
                            </div>
                            {/* Best Sellers Item */}
                            <div className="bestsellers_item">
                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                <div className="bestsellers_image">
                                    <img src={best1} alt="t" />
                                </div>
                                <div className="bestsellers_content">
                                    <div className="bestsellers_category">
                                    <Link to="/">Headphones</Link>
                                    </div>
                                    <div className="bestsellers_name">
                                    <Link to="product.html">Xiaomi Redmi Note 4</Link>
                                    </div>
                                    <div className="rating_r rating_r_4 bestsellers_rating">
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    <i />
                                    </div>
                                    <div className="bestsellers_price discount">
                                    $225<span>$300</span>
                                    </div>
                                </div>
                                </div>
                                <div className="bestsellers_fav active">
                                <i className="fas fa-heart" />
                                </div>
                                <ul className="bestsellers_marks">
                                <li className="bestsellers_mark bestsellers_discount">
                                    -25%
                                </li>
                                <li className="bestsellers_mark bestsellers_new">new</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}
