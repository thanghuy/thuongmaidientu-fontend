import React, { Component } from 'react';
import Alert from './message';
import * as URL from '../../constant/config';
import FormatNumber from '../../utils/FormatNumber';
import CallAPi from '../../utils/ApiToken';
import { connect } from 'react-redux';
import * as action from '../../action/addCart';
import * as actions from '../../action/SignUp';
import * as authService from '../../common/services/AuthService';
import Rating from '@material-ui/lab/Rating';
class InforProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : "",
            imgMain : "",
            price : "",
            slug : "",
            listImg : [],
            quantity : 1,
            AlertAdd : false ,
            showFormComfirm : false,
            time : null
        }
    }
    handelChange = (event) =>{
        var {OneProduct} = this.props;
        var quantity = event.target.value;
        if(quantity < OneProduct.amount && quantity >= 1){
            this.setState({
                quantity : quantity
            })
        }
        else if(quantity > OneProduct.amount){
            this.setState({
                quantity : OneProduct.amount
            })
        }
        else{
            this.setState({
                quantity : 1
            })
        }
    }
    getAddCart = (idUser,token) =>{
        var {OneProduct} = this.props;
        var {quantity} = this.state;
        var data = {
            buyerId : idUser,
            UserId : OneProduct.userId,
            Id : OneProduct.bookId,
            Name : OneProduct.name,
            slug : OneProduct.slug,
            Price : OneProduct.price,
            Amount : quantity,
            fullName: OneProduct.fullName,
            imagePath : OneProduct.imagePath
        }
        return CallAPi("cart","POST",data,token).then(resp =>{
            this.props.AddCartFinish(resp.data.data.items)
        })
    }
    addToCart =() =>{
        var {userName} = this.props;
        if(userName === null){
            this.setState({
                showFormComfirm : true
            })
        }
        else{
            var idUser = JSON.parse(localStorage.getItem('userName'));
            var token = localStorage.getItem('token');
            this.getAddCart(idUser.sub,token);
            this.setState({
                AlertAdd : true
            })
            var time = setTimeout(()=>{
                this.setState({
                    AlertAdd : false
                })
            },1000)
            this.setState({
                time
            })
        }
    }
    componentWillUnmount(){
        clearTimeout(this.state.time)
    }
    setMinus = () =>{
        var {quantity} = this.state;
        if(quantity > 1){
            var minus = parseInt(quantity) - 1;
            this.setState({quantity : minus})
        }
    }
    setPlus = () =>{
        var {OneProduct} = this.props;
        var {quantity} = this.state;
        if(quantity < OneProduct.amount){
            var minus = parseInt(quantity) + 1;
            this.setState({quantity : minus})
        }
    }
    setImg = (img) =>{
        this.setState({
            imgMain : img
        })
    }
    showListImg =()=>{
        var listImg = this.props.OneProduct.imagePaths;
        var result = "";
        if(listImg !== undefined){
            result = listImg.map((img,index)=>{
                 return (
                    <li className="active" key={index} onMouseOver={() => this.setImg(img)}>
                        <div data-target="#pic-1" data-toggle="tab" className="listimg">
                            <img src={URL.urlImg + img} alt="main"/>
                        </div>
                    </li>
                )
            })
        }
        return result;
    }
    showRating =()=>{
        var {OneProduct} = this.props;
        var result = [];
        if(parseInt(OneProduct.rating) > 0){
            result = (
                <Rating name="read-only" value={parseInt(OneProduct.rating)} readOnly />
            )
        }
        return result;
    }
    closeComfirm =()=>{
        this.setState({
            showFormComfirm : false
        })
    }
    render() {
        var {imgMain,quantity,AlertAdd,showFormComfirm} = this.state;
        var {OneProduct} = this.props;
        var showMessge = AlertAdd ? <Alert/> : "";
        var imgs = OneProduct.imagePath === undefined ? "/Images/book1.jpg" : OneProduct.imagePath;
        imgMain = imgMain === "" ? imgs : imgMain;
        var imageMain = URL.urlImg + imgMain;
        var show = showFormComfirm ? "block" : "none";
        return (
            <div className="card">
                    <div className="confirm-de" style={{display : show}}>
                        <div className="md-delete container" style={{background :"#f2f3f5"}}>
                            <div className="md-delete-tilte">Bạn phải đăng nhập trước</div>
                            <div>
                                <button className="md-delete-bt" type="button" onClick={() => authService.login()}>Đi đến đăng nhập</button>
                                <button className="md-delete-bt" type="button" onClick={this.closeComfirm} style={{background :"#ffffff"}}>Không</button>
                            </div>
                        </div>
                    </div>

                {showMessge}
                <div className="container">
                    <div className="wrapper row" style={{width : "100%"}}>
                        <div className="preview col-md-5">
                        <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1">
                                <img src={imageMain} alt="main"/>
                            </div>
                        </div>
                        <ul className="preview-thumbnail nav nav-tabs">
                            {this.showListImg()}
                        </ul>
                        </div>
                        <div className="details col-md-7">
                            <h3 className="product-title">{OneProduct.name}</h3>
                            <div className="rating">
                                <div className="stars">
                                    {this.showRating()}
                                </div>
                                <span className="review-no">{OneProduct.rateCount} đánh giá</span>
                            </div>
                            <h4 className="price">
                                Giá : <span style={{fontSize : "35px"}}>{FormatNumber(OneProduct.price)}</span>
                            </h4>
                            <p className="vote">
                                <strong>Giảm 50%</strong>
                                <strong>300.000Đ</strong>
                            </p>
                            <b className="product-description">
                                Nhà xuất bản :&ensp;{OneProduct.publisher}
                            </b>
                            <h5 className="sizes">
                                Tác giả :
                                <span className="size" data-toggle="tooltip" title="small">{OneProduct.author}</span>
                            </h5>
                            <div className="colors">
                                Số lượng:
                                <div className="quantity">
                                    <button type="button" className="minus icon-dt1" onClick={this.setMinus}>-</button>
                                        <input type="text" className="number-pc01" onChange={this.handelChange} value={quantity}/>
                                    <button type="button" className="plus icon-dt1" onClick={this.setPlus}>+</button>
                                    <span className="quantity_product">Còn {OneProduct.amount} sản phẩm</span>
                                </div>
                            </div>
                            <div className="action">
                                <button className="add-to-cart" type="button" onClick={this.addToCart}>
                                <i className="fas fa-cart-plus">&ensp;</i>
                                Thêm vào giỏ hàng
                                </button>
                                <button className="like" type="button">
                                Mua ngay
                                </button>
                                {/* <button className="like" type="button">
                                    <span className="fa fa-heart" />
                                </button> */}
                            </div>
                            <div className="benefits_20y9">
                                <div className="item_8SP8" id="tooltip-benefit-0">
                                    <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 1024 1024"
                                    className="icon iconCheck_3TcW"
                                    >
                                    <path d="M803.84 298.667L519.723 582.742 390.87 453.547l-49.536 49.493 178.773 178.773L853.334 348.16z" />
                                    <path d="M768 554.667h42.667v256H213.334V213.334h555.221v42.667H256v512h512V554.668z" />
                                    </svg>
                                    <strong className="title_2eUg">48 giờ hoàn trả</strong>
                                </div>
                                <div className="item_8SP8 disable_3qw-" id="tooltip-benefit-1">
                                    <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 1024 1024"
                                    className="icon iconCheck_3TcW"
                                    >
                                    <path d="M803.84 298.667L519.723 582.742 390.87 453.547l-49.536 49.493 178.773 178.773L853.334 348.16z" />
                                    <path d="M768 554.667h42.667v256H213.334V213.334h555.221v42.667H256v512h512V554.668z" />
                                    </svg>
                                    <strong className="title_2eUg">Kiểm hàng khi nhận</strong>
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
        dataCart : state.dataCart,
        status : state.status,
        userName : state.userName
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        AddCartFinish : (dataCart) => {
            dispatch(action.AddCart(dataCart))
        },
        ShowLogin : ()=>{
            dispatch(actions.status())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InforProduct);