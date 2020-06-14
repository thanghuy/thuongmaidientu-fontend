import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import imga from '../../../assets/images/avatar.png'
import FormatNumber from '../../../utils/FormatNumber';
import * as url from '../../../constant/config';
import CallApi from '../../../utils/Api5004';
const OrderManager = (props) => {
    const [showBt,setShowBt] = useState(true)
    const setStatusOrder = (id) =>{
        // var token = localStorage.getItem("token");
        // var resp = await CallApi("/order/"+id,"PUT",token,2);
        setShowBt(false)
        props.setListOrderItem(id)
    }
    const showOrderItems =()=>{
        var {orderItems,statusOrder} = props;
        var btItem = showBt ? "block" : "none"; 
        var result = null;
        result = orderItems.map((item,index)=>{
            var img = url.urlImg + item.image;
            var urlProduct = `/product/${item.slug}.${item.bookId}.html`;
            return(
                <tbody key={index}>
                    <tr className="order-detaile-admin">
                        <td>
                            <div className="img-order-admin" onClick={()=> window.open(urlProduct)}>
                                <img src={img} alt="demo"/>
                                <p>{item.bookName}</p>
                            </div>
                        </td>
                        <td><span className="price">{FormatNumber(item.bookPrice)}</span></td>
                        <td><span className="status_order">{statusOrder}</span></td>
                        <td>
                            <button type="button" className="comfirm-order-admin" 
                            onClick={()=>setStatusOrder(orderId)} style={{display : btItem}}
                            >Chuẩn bị hàng</button>
                            <button type="button" className="comfirm-order-admin-h" style={{display : btItem}} onClick={()=>setStatusOrder(orderId)}><i className="fas fa-trash-alt"/>Hủy</button>
                            <button type="button" className="comfirm-order-admin" 
                            style={{display : btItem}}
                            >Thành công</button>
                        </td>
                    </tr>
                </tbody>
            )
        })
        return result;
    } 
    var {orderId,fullname} = props;
    return (
        <table className="table list-order">
                <thead className="tx">
                <tr>
                    <th scope="col" colSpan="4">
                        <span className="name-user">
                            <span>{fullname}</span>
                            <Avatar alt="Cindy Baker" src={imga} />
                        </span>
                        <span className="id-order-user">ID đơn hàng : {orderId}</span>
                    </th>
                </tr>
                </thead>
                {showOrderItems()}
            </table>
    );
};

export default OrderManager;