import React, { Component } from 'react';
import productimg from '../../assets/images/dam-bi-ghet.jpg';
import {Link} from 'react-router-dom';
class product extends Component {
    render() {
        return (
            <div className="arrivals_slider_item">
                <div className="product_item_home ">
                <div className="product_image">
                    <Link to="/detail"><img src={productimg} alt="a" /></Link>
                </div>
                <div className="product_content">
                    <div className="product_name_home">
                        <Link to="/detail">Dám bị ghét</Link>
                    </div>
                    <div className="product_price_home">
                        <span className="price">225.000đ</span>
                        <span className="discount"> -50%</span>
                    </div>
                    <div className="product_discount_home">
                        <span>500.000đ</span>
                    </div>
                    <div className="star_rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <b> (61 nhận xét)</b>
                    </div>
                </div>
                <div className="product_fav">
                    <i className="fas fa-heart" />
                </div>
                <ul className="product_marks">
                    <li className="product_mark product_discount">-25%</li>
                    <li className="product_mark product_new">new</li>
                </ul>
                </div>
            </div>
        );
    }
}

export default product;