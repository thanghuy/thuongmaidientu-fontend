import React ,{ useState} from 'react';
import LoadingOrder from '../../common/loading/loadingUpdate';
import {withRouter} from 'react-router-dom';
import FormatNumber from '../../utils/FormatNumber';
import axios from 'axios';
import CallApi from '../../utils/ApiToken';
const InfoPayment = (props) => {
    const [loading,setLoading] = useState(false);
    const setArrayCart =()=>{
        var {dataCart} = props;
        var List = [];
        if(dataCart.length > 0){
            dataCart.map((item)=>{
                var data = {
                    Image : item.imagePath,
                    UserId : item.userId,
                    Amount : item.amount,
                    BookId : item.id,
                    fullName : item.fullName,
                    slug : item.slug,
                    BookName : item.name,
                    BookPrice : item.price
                }
                List.push(data);
                return List;
            })
        }
        return List;
    }   
    const getAddressMain =()=>{
        var data = props.dataAddress === "" ? [] : props.dataAddress;
        var Address = "";
        data.map((item)=>{
            if(item.isDefault){
                Address = item;
            }
            return Address
        })
        return Address
    }
    const DeleteCart =(id)=>{
        var token = localStorage.getItem('token');
        CallApi('cart/',"DELETE",id,token);
    }
    const DeleteAllCart =()=>{
        props.dataCart.forEach(items => {
            DeleteCart(items.id)
        });
    }
    const AddOrder = async () =>{
        setLoading(true)
        var token = localStorage.getItem("token");
        var OrderItem = setArrayCart();
        var Address = getAddressMain()
        var data = {
            Address : Address.fullAddress,
            PhoneNumber : Address.phoneNumber,
            FullName : Address.fullName,
            OrderItems : OrderItem
        }
        var resp = await axios({
            method : "POST",
            url : "https://localhost:5004/api/order",
            headers: {
                Authorization:"Bearer " + token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }, 
            data : data
        });
        if(resp.status === 200){
            setLoading(false)
            DeleteAllCart()
            props.history.push('/user/order')
        }
    }
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
            <LoadingOrder load={loading ? "block" : "none"} />
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
            <div className="container-right-payment">
                <div className="content-payment-01">
                    <p>
                    Tổng tiền:
                    <span className="price-cart-total">{getTotalCart()}</span>
                    </p>
                    <button className="btn-cart" type="button" onClick={AddOrder}>Đặt hàng</button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(InfoPayment);