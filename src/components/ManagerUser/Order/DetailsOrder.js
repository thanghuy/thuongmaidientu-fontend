import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import imga from '../../../assets/images/avatar.png';
import img from '../../../assets/images/bi-mat-hanh-trinh-tinh-yeu.jpg';
import Avatar from '@material-ui/core/Avatar';
import FormatNumber from '../../../utils/FormatNumber';
import * as UrlImg from '../../../constant/config';
import {Link,withRouter} from 'react-router-dom';
import CallApi from '../../../utils/Api5004';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  color :{
    color : "#2dc258",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Đang xử lý', 'Đã xử lý', 'Đã nhận'];
}

const DetailOrder = (props) => {
  const classes = useStyles();
  const steps = getSteps();
  const showOrderItem =(dataOrder,OrderId,status)=>{
    var result = null;
    var disabled = status === 3 ? null : "active-click-comment" 
    result = dataOrder.map((orderIteam,index)=>{
      var imageProduct = UrlImg.urlImg + orderIteam.image;
        return(
          <tr className="order-detaile-manager" key={index}>
            <td>
                <div className="img-order-manager">
                  <Link to={`/product/${orderIteam.slug}.${orderIteam.bookId}.html`}>
                      <img src={imageProduct} alt="demo"/>
                      <p>{orderIteam.bookName}</p>
                    </Link>
                </div>
            </td>
            <td>
                <Link to={`/comment/${orderIteam.orderItemId}/${orderIteam.slug}.${orderIteam.bookId}`} className={disabled}>
                  <span className="product-review">Viết nhận xét</span>
                </Link>
            </td>
            <td><span className="price">{FormatNumber(orderIteam.bookPrice)}</span></td>
        </tr>
        )
    })
    return result;
  }
  const showDataOrder =()=>{
    var url = props.location.search;
    var params = new URLSearchParams(url);
    var idOrder = params.get("idOrder");
    var {dataOrder} = props;
    var result = "";
    result = dataOrder.map((item,index)=>{
      if(item.orderId ===  parseInt(idOrder)){
        return(
          <div key={index} className="col-12 table-manager" style={{background : "white"}}>
            <table className="table list-order-manager">
                <thead>
                  <tr>
                      <td colSpan="4">
                          <span className="name-user-manager">
                              <span><Avatar alt="Cindy Baker" src={imga} /></span>
                              <span>{item.orderItems[0].fullName}</span>
                          </span>
                          <span className="id-order-user-manager">ID đơn hàng : {item.orderId}</span>
                      </td>
                  </tr>
                </thead>
              <tbody>{showOrderItem(item.orderItems,item.orderId,item.status)}</tbody>
            </table>

            <div className="shopee-border-bottom-dotted-circle__container">
              <div className="shopee-border-bottom-dotted-circle__circle shopee-border-bottom-dotted-circle__circle--left"></div>
              <div className="shopee-border-bottom-dotted-circle__circle shopee-border-bottom-dotted-circle__circle--right"></div>
            </div>
            <div className="payment-detail__item payment-detail__item--last">
              <div className="payment-detail__item__description">
                <div className="payment-detail__item__description-inner">
                  Tổng tiền
                </div>
              </div>
              <div className="payment-detail__item__value">
                <div className="payment-detail__item__value-text">
                <span className="purchase-card-buttons__total-price">{FormatNumber(item.total)}</span>
                </div>
              </div>
            </div>
            <div className="payment-detail__item payment-detail__item--last">
              <div className="payment-detail__item__description">
                <div className="payment-detail__item__description-inner">
                  <div className="payment-detail__item__icon shopee-guarantee-icon payment-detail__shopee-guarantee-icon">
                  </div>
                  Phương thức Thanh toán
                </div>
              </div>
              <div className="payment-detail__item__value">
                <div className="payment-detail__item__value-text">
                  <span className="payment-detail__payment-method-value">
                    Thanh toán khi nhận hàng
                  </span>
                </div>
              </div>
            </div>
            <div className="payment-detail__item payment-detail__item--last">
              <div className="payment-detail__item__description">
                <div className="payment-detail__item__description-inner">
                  Ngày mua
                </div>
              </div>
              <div className="payment-detail__item__value">
                <div className="payment-detail__item__value-text">
                  <span >{item.create}</span>
                </div>
              </div>
            </div>
        </div>
        )
      }
      return result;
    })
    return result;
  }
  const setStatusOrder = async (id) =>{
    try {
      var token = localStorage.getItem("token");
      await CallApi("/order/"+id,"PUT",token,3);
      props.setDataOrderItem()
    } catch (error) {
      console.log(error)
    }
    
}
  const showInforOrder =()=>{
    var url = props.location.search;
    var params = new URLSearchParams(url);
    var idOrder = params.get("idOrder");
    var {dataOrder} = props;
    var result = "";
    result = dataOrder.map((item,index)=>{
      if(item.orderId ===  parseInt(idOrder)){
        var CheckOrder = item.status === 2 ? "block" : "none";
        return(
          <div className="col-12 table-manager" style={{background : "white"}} key={index}>
            <div className="purchase-card-buttons__show-button-wrapper" style={{display : CheckOrder , marginLeft :"0px"}}>
              <button className="shopee-button-solid shopee-button-solid--fill shopee-button-solid--primary "
                onClick={()=> setStatusOrder(item.orderId)}
              >
                <span className="purchase-card-buttons__button-content">
                  Đã nhận hàng
                </span>
              </button>
            </div>
            <div className="delivery-summary">
              <div
                className="delivery-wrapper"
                data-spm-anchor-id="a2o4n.order_details.0.i1.52da705belMkjW"
              >
                <h3 className="title-manager">Địa chỉ giao hàng</h3>
                <span className="username-manager">{item.fullname}</span>
                <span className="address-manager">
                  <span className="in-line-manager">{item.address}</span>
                </span>
                <span>{item.phoneNumber}</span>
              </div>
          </div>
        </div>
        )
      }
      return result;
    })
    return result;
  }
  const showStepper = () =>{
    var url = props.location.search;
    var params = new URLSearchParams(url);
    var idOrder = params.get("idOrder");
    var {dataOrder} = props;
    var result = "";
    result = dataOrder.map((item,index)=>{
      if(item.orderId ===  parseInt(idOrder)){
        var status = parseInt(item.status);
        return(
          <Stepper activeStep={status} alternativeLabel key={index} >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )
      }
      return result;
    })
    return result;
  }
  return (
    <div className={classes.root}>
      {showStepper()}
      {showInforOrder()}
      {showDataOrder()}
    </div>
  );
}
export default withRouter(DetailOrder);