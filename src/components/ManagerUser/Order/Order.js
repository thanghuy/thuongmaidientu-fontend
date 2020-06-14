import React, { useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import imga from '../../../assets/images/avatar.png';
import img from '../../../assets/images/bi-mat-hanh-trinh-tinh-yeu.jpg';
import FormatNumber from '../../../utils/FormatNumber';
import * as UrlImg from '../../../constant/config';
import {Link} from 'react-router-dom';
function Order(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const showOrderItem =(orderItem)=>{
    var result = null;
    if(orderItem !== null){
      result = orderItem.map((orderIteam,index)=>{
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
            <td><span className="price">{FormatNumber(orderIteam.bookPrice)}</span></td>
        </tr>
        )
      })
      return result;
    }
    return result;
  }
  const showDataOrder =()=>{
    var {dataOrder} = props;
    var result = "";
    result = dataOrder.map((item,index)=>{
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
              <tbody>{showOrderItem(item.orderItems)}</tbody>
            </table>

            <div className="shopee-border-bottom-dotted-circle__container">
              <div className="shopee-border-bottom-dotted-circle__circle shopee-border-bottom-dotted-circle__circle--left">
                {" "}
              </div>
              <div className="shopee-border-bottom-dotted-circle__circle shopee-border-bottom-dotted-circle__circle--right">
                {" "}
              </div>
            </div>
            <div className="order-card__buttons-container">
              <div className="purchase-card-buttons__wrapper">
                <div className="purchase-card-buttons__total-payment">
                  <div className="shopee-guarantee-icon purchase-card-buttons__shopee-guarantee-icon" />
                  <span className="purchase-card-buttons__label-price">
                    {" "}
                    Tổng số tiền:{" "}
                  </span>
                  <span className="purchase-card-buttons__total-price">{FormatNumber(item.total)}</span>
                </div>
                <div className="purchase-card-buttons__container">
                  <div className="purchase-card-buttons__text-info">
                    <span className="purchase-text-info">
                      <span>Không nhận được đánh giá</span>
                    </span>
                    <div />
                  </div>
                  <div className="purchase-card-buttons__show-button-wrapper">
                    <button className="shopee-button-solid shopee-button-solid--fill shopee-button-solid--primary ">
                      <span className="purchase-card-buttons__button-content">
                        Mua lần nữa
                      </span>
                    </button>
                  </div>
                  <div className="purchase-card-buttons__show-button-wrapper">
                    <Link to={`?idOrder=${item.orderId}`}>
                    <button className="shopee-button-outline shopee-button-outline--fill shopee-button-outline--primary ">
                      <span className="purchase-card-buttons__button-content">
                        Xem Chi tiết đơn hàng
                      </span>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
        )
    })
    return result;
  }
  return (
    <div >
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Tất cả" />
          <Tab label="Chờ lấy hàng" />
          <Tab label="Đang giao" />
          <Tab label="Đã giao" />
          <Tab label="Đã hủy" />
        </Tabs>
      </Paper>
        <div className="col-12" style={{background : "white"}}>
            <nav className="navbar order-manager">
                <span className="navbar-brand manager">Đơn hàng</span>
            </nav>
        </div>
        {showDataOrder()}
    </div>
  );
}
export default Order