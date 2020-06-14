import React, { Component } from 'react';
import cartimg from '../../assets/images/cart.png';
import {Link} from "react-router-dom"; 
import cartimge from '../../assets/images/giohangtrong.png'; 
import * as URL from '../../constant/config';
class cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart_empty : false,
            numberCart : 0,
            products : ""
        }
    }
    AddCart = () =>{
        var {dataCart} = this.props;
        var result = "";
        if(dataCart !== null){
            result = dataCart.map((product,index) =>{
                var img = URL.urlImg + product.imagePath;
                return (
                    <div className="show-item-cart" key={index}>
                        <div className="item_cart">
                            <div className="item_cart_img">
                                <img src={img} alt="item1"/>
                            </div>
                            <div className="item_cart_name">
                                <span>{product.name}</span>
                            </div>
                            <div className="item_cart_price">
                                <span>{product.price}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        else{
            result = (
                <div className="cart_empty">
                    <img src={cartimge}  alt="cart_empty"/>
                </div>
            )
        }
        return result
    }
    render() {
        var {dataCart} = this.props;
        let number = 0;
        if(dataCart !== null){
            dataCart.forEach(element => {
                number += element.amount;
            })
        }
        return (
            <div className="cart">
                <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                    <div className="cart_content">
                        <Link to="/cart">
                            <div className="cart_icon">
                                <img src={cartimg} alt="cart"></img>
                                <div className="cart_count"><span>{number}</span></div>
                            </div>
                        </Link>
                        <div className="show-cart">
                            <div className="title_cart">
                                <h5>Danh sách sản phẩm</h5>
                            </div>
                            <div className="show-cart-m01">
                                {this.AddCart()}
                            </div>
                            <div className="to_cart">
                                <Link to="/cart">Đến giỏ hàng</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default cart;