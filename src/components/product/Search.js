import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Rating from '@material-ui/lab/Rating';
import {withRouter} from 'react-router-dom';
import QuerySearch from './filter';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            priceFrom : 0,
            priceTo : 0
        }
    }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    sortPrice = () =>{
        var {priceFrom,priceTo} = this.state;
        var filter = this.props.location.search;
        var search = new URLSearchParams(filter);
        var page = search.get("current") === null ? 1 :  search.get("current");
        var priceOld1 = search.get("priceFrom") === null ? 1 :  search.get("priceFrom");
        var priceOld2 = search.get("priceTo") === null ? 1 :  search.get("priceTo");
        console.log(priceOld1,priceOld2)
        var Query = QuerySearch.sortPriceFromTo(filter,priceFrom,priceTo,priceOld1,priceOld2,page)
        this.props.history.push({search : Query})
    }
    render() {
        return (
            <div className="col-2 shop_search">
                <div className="shop_sidebar">
                    <div className="sidebar_section">
                        <div className="sidebar_title">Bộ lọc sản phẩm</div>
                    </div>
                    <div className="sidebar_section">
                        <div className="sidebar_title">Thương hiệu</div>
                        <ul className="sidebar_categories">
                            <li>
                                <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <span>Computers &amp; Laptops</span>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar_section filter_by_section">
                        <div className="sidebar_title">Tìm kiếm theo</div>
                            <div className="sidebar_subtitle">
                                <label>Khoảng giá</label>
                                <input type="text" placeholder="Giá từ" className="price_filter price_from"
                                name="priceFrom"
                                onChange={this.handleChange}
                                />
                                <input type="text" placeholder="Giá đến" className="price_filter price_to"
                                name="priceTo"
                                onChange={this.handleChange}
                                />
                            </div>
                            <button type="button" className="apdung"
                                onClick={this.sortPrice}
                            >Áp dụng</button>
                    </div>
                    <div className="sidebar_section filter_by_section">
                        <div className="filter_price">
                            <div className="sidebar_title">Đánh giá</div>
                            <div className="star_rating">
                                <Rating name="read-only" value={5} readOnly />
                            </div>
                            <div className="star_rating">
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                            <div className="star_rating">
                                <Rating name="read-only" value={3} readOnly />
                            </div>
                            <div className="star_rating">
                                <Rating name="read-only" value={2} readOnly />
                            </div>
                            <div className="star_rating">
                                <Rating name="read-only" value={1} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Search);