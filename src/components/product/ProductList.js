import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import * as URL from '../../constant/config';
import FormatNumber from '../../utils/FormatNumber';
import Rating from '@material-ui/lab/Rating';
class ProductList extends Component {
    showRating =()=>{
        var {product} = this.props;
        var result = "";
        if(parseInt(product.rating) > 0){
            result = (
                <Rating name="read-only" value={parseInt(product.rating)} readOnly />
            )
        }
        return result;
    }
    render() {
        var { product , viewPage} = this.props;
        let img = URL.urlImg + product.imagePath;
        let result = "";
        if(viewPage){
            result = (
                <div className="product_item-horizontal">
                    <div className="product_image-horizontal">
                        <Link to={`/product/${product.slug}.${product.bookId}.html`}>
                            <img src={img} alt={product.bookId}/>
                        </Link>
                    </div>
                    <div className="product_content-horizontal">
                        <div className="product_name_home-horizontal">
                            <Link to={`/product/${product.slug}.${product.bookId}.html`}>{product.name}</Link>
                        </div>
                        <div className="horizontal-pr01">
                            <div className="product_price_home-horizontal">
                                <span className="price">{FormatNumber(product.price)}</span>
                                <span className="discount"> -50%</span>
                            </div>
                            <div className="product_discount_home-horizontal">
                                <span>500.000đ</span>
                            </div>
                            <div className="star_rating horizontal">
                                {this.showRating()}
                                <b> (61 nhận xét)</b>
                            </div>
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
            )
        }
        else{
            result = (
                <div className="product_item">
                    <div className="product_image">
                        <Link to={`/product/${product.slug}.${product.bookId}.html`}>
                            <img src={img} alt={product.id}/>
                        </Link>
                    </div>
                    <div className="product_content">
                        <div className="product_name_home">
                            <Link to={`/product/${product.slug}.${product.bookId}.html`}>{product.name}</Link>
                        </div>
                        <div className="product_price_home">
                            <span className="price">{FormatNumber(product.price)}</span>
                            <span className="discount"> -50%</span>
                        </div>
                        <div className="product_discount_home">
                            <span>500.000đ</span>
                        </div>
                        <div className="star_rating">
                            {this.showRating()}
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
            )
        }
        return (
            <div className="demo">
                {result}
            </div>
        );
    }
}

export default ProductList;