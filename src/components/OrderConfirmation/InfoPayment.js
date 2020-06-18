import React  from 'react';
import FormatNumber from '../../utils/FormatNumber';
const InfoPayment = (props) => {
    const getTotalCart =()=>{
        var {dataCart} = props;
        var totalCart = 0;
        dataCart.forEach(element => {
            totalCart = totalCart + element.totalPrice;
        });
        return FormatNumber(totalCart);
    }
    return (
        <div className="col-4">
            <div className="container-right-payment">
                <div className="card-body">
                    <h4><i className="fas fa-window-maximize"/>&ensp;Mã khuyến mãi</h4>
                </div>
                <div className="content-payment-01" >
                    <input name="discount" type="text" className="form-control"/>
                    <button className="btn-cart-1" type="button">Áp dụng</button>
                </div>
            </div>
            <div className="container-right-payment">
                <div className="card-body">
                    <h4><i className="fas fa-calendar-check"/>&ensp;Thông tin đơn hàng</h4>
                </div>
                <div className="content-payment-01">
                    <hr />
                    <div className="card-body" style={{borderRadius : "5px",marginBottom:"15px"}}>
                        <h4 className="card-title"><i className="fas fa-shipping-fast"/>&ensp;Giao hàng tiêu chuẩn</h4>
                    </div>
                    <p>
                    Tạm tính:
                        <span className="price-cart-total">{getTotalCart()}</span>
                    </p>
                    <p>
                    Phí vận chuyển:
                    <span className="price-cart-total">{FormatNumber(0)}</span>
                    </p>
                    <p>
                    Thành tiền:
                        <span className="price-cart-total">{getTotalCart()}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default InfoPayment;