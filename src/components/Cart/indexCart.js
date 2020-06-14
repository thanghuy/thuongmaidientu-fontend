import React, { Component } from 'react';
import '../../assets/css/cart_styles.css';
import '../../assets/css/cart_responsive.css';
import {Link,withRouter} from 'react-router-dom';
import FormatNumber from '../../utils/FormatNumber';
import * as Message from '../../constant/message';
import * as URL from '../../constant/config';
import { connect } from 'react-redux';
import * as action from '../../action/addCart';
import CallApi from '../../utils/ApiToken';
import axios from "axios";
import LoadingUpdate from '../../common/loading/loadingUpdate';
class index extends Component { 
    constructor(props){
        super(props);
        this.state = {
            checked : true,
            checkProduct : true,
            Checkaddress : false,
            activeDe : false,
            id : "",
            deleteAll : false,
            quantity : 1,
            totalItem : 0,
            loading : false
        }
    }
    getCart = () =>{
        var userID = JSON.parse(localStorage.getItem('userName'));
        if(userID !== null){
            var token = localStorage.getItem('token');
            return CallApi('cart/',"GET",null,token).then(resp =>{
                this.props.UpdateCartRed(resp.data.data.items)
            })
        }
    }
    UpdateCart = (id,value) =>{
        var {dataCart} = this.props;
        var data = "";
        if(dataCart !== ""){
            dataCart.map((product)=>{
                if(id === product.id){
                    data = {
                        Id : product.id,
                        Name : product.name,
                        Price : product.price,
                        Amount : value,
                        imagePath : product.imagePath
                    }
                }
                return data
            })
        }
        if(data !== ""){
            this.setState({loading : true})
            var token = localStorage.getItem('token');
            return CallApi('cart/',"PUT",data,token).then(resp =>{
                this.props.UpdateCartRed(resp.data.data.items)
                this.setState({loading : false})
            })
        }
    }
    delete(id){
        var token = localStorage.getItem('token');
        return CallApi('cart/',"DELETE",id,token).then(resp =>{
            this.setState({
                activeDe : false
            })  
            this.props.UpdateCartRed(resp.data.data.items)
        })
    }
    comfirmDe =()=>{
        var {id} = this.state;
        id.forEach(id => {
            this.delete(id)
        });
    }
    componentDidMount(){
        this.getCart()
    }
    onchange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    setMinus = (id,value) =>{
        var quantity = value;
        if(quantity > 1){
            var minus = parseInt(quantity) - 1;
            this.UpdateCart(id,minus)
        }
    }
    setPlus = (id,value) =>{
        var quantity = value;
        if(quantity < 10){
            var plus = parseInt(quantity) + 1;
            this.UpdateCart(id,plus)
        }
    }
    deleteCart = (id)=>{
        this.setState({
            activeDe : true,
            deleteAll : false,
            id : [id]
        })
    }
    deleteAllCart =()=>{
        var id = [];
        this.props.dataCart.forEach(items => {
            id.push(items.id)
        });
        this.setState({
            activeDe : true,
            deleteAll : true,

            id : id
        })
    }
    closeDe =() =>{
        this.setState({
            activeDe : false
        })
    }
    checkAddress = async ()=>{
        var token = localStorage.getItem("token");
        //var userName = JSON.parse(localStorage.getItem("userName"))
        var resp = await axios({
            method : "GET",
            url : "https://localhost:5003/api/addressuser/",
            headers: {
                Authorization:"Bearer " + token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }, 
            data : null
        });
        if(resp.data.data.length === 0){
            this.props.history.push("/new-address")
        }
        else{
            this.props.history.push("/xac-nhan-don-hang")
        }
    }
    render() {
        var {activeDe,deleteAll,loading} =  this.state;
        var {dataCart} = this.props;
        var active = activeDe ? "block" : "none";
        var messageComfirm =  deleteAll ? Message.DeleteAllCart : Message.DeleteCart;
        let result = "";
        let total = 0;
        if(dataCart !== ""){
                result = dataCart.map((product,index) => {
                var imgMain = URL.urlImg + product.imagePath;
                total = total +  product.totalPrice;
                var load = loading ? "block" : "none";
                return (
                <div className="cart_items" key={index}>
                    <LoadingUpdate load={load}/>
                    <ul className="cart_list">
                    <li className="cart_item clearfix">
                        <div className="cart_item_image">
                            <div className="checkbox-cart">
                                <label className="container-check">
                                    <input 
                                    type="checkbox"
                                    name="checkProduct" 
                                    defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <Link to={`/product/${product.slug}.${product.id}.html`}><img src={imgMain} alt="cart" /></Link>
                        </div>
                        <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_namec col-5">
                            <Link to={`/product/${product.slug}.${product.id}.html`}>
                                <div className="cart_item_text-name">{product.name}</div>
                            </Link>
                        </div>
                        <div className="cart_item_quantity col-3">
                            <div className="cart_item_text">
                                <div className="number">
                                    <button type="button" className="minus icon-pc1" onClick={() =>this.setMinus(product.id,product.amount)}>-</button>
                                    <input type="text" className="number-pc01" onChange={this.onchange} value={product.amount}/>
                                    <button type="button" className="plus icon-pc1" onClick={() =>this.setPlus(product.id,product.amount)}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart_item_price col-3">
                            <div className="cart_price_text">{FormatNumber(product.totalPrice)}</div>
                        </div>
                        <div className="cart_item_total col-1">
                            <div className="cart_item_text"><i className="fas fa-trash-alt" onClick={()=>this.deleteCart(product.id)}></i></div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
            );
        });
        }
        return (
            <div className="col-12">
                <div className="confirm-de" style={{display : active}}>
                    <div className="md-delete container">
                        <div className="md-delete-tilte">{messageComfirm}</div>
                        <div>
                            <button className="md-delete-bt" type="button" onClick={this.comfirmDe}>Xác nhận</button>
                            <button className="md-delete-bt" type="button" onClick={this.closeDe}>Không</button>
                        </div>
                    </div>
                </div>
                <div className="cart_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb chea-01">
                                        <li className="breadcrumb-item">
                                            <label className="container-check">
                                                <input 
                                                type="checkbox"
                                                name="checkProduct" 
                                                defaultChecked="checked"
                                                />
                                                <span className="checkmark" style={{marginTop : "8px",marginLeft : "27px"}}></span>
                                            </label>
                                        </li>
                                        <li className="breadcrumb-tiem">Chọn tất cả sản phẩm</li>
                                        <li className="breadcrumb-tiem"></li>
                                        <li className="breadcrumb-tiem"></li>
                                        <li className="breadcrumb-tiem"><i className="fas fa-trash-alt" onClick={this.deleteAllCart}/></li>
                                        <li className="breadcrumb-tiem">Xác nhận</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row main-cart">
                            <div className="col-lg-9">
                                {result}
                            </div>
                            <div className="col-3">
                                <div className="container-right">
                                    <div className="card-body">
                                        <h4><i className="fas fa-calendar-check"/>&ensp;Thông tin đơn hàng</h4>
                                    </div>
                                    <div className="cart-right-main01">
                                        <hr />
                                        <p>
                                        <span className="-ncrt001">Tạm tính:</span> <span className="price-cartm">{FormatNumber(total)}</span>
                                        </p>
                                        <hr />
                                        <p>
                                        Tổng tiền:
                                            <span className="price-cart-total">{FormatNumber(total)}</span>
                                        </p>
                                        <button className="btn-cart" type="button" onClick={this.checkAddress}>Xác nhận giỏ hàng</button>
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
const mapStateToProps = state => {
    return {
        dataCart : state.dataCart
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        UpdateCartRed : (dataCart) => {
            dispatch(action.AddCart(dataCart))
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(index));