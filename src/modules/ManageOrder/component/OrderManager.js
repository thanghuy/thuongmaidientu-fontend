import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import imga from '../../../assets/images/avatar.png'
import FormatNumber from '../../../utils/FormatNumber';
import * as url from '../../../constant/config';
import CallApi from '../../../utils/Api5004';
const OrderManager = (props) => {
    const [showBt,setShowBt] = useState(true);
    const setStatusOrder = async (id,status) =>{
        try {
            var token = localStorage.getItem("token");
            await CallApi("/order/"+id,"PUT",token,status);
            setShowBt(false)
            props.setListOrderItem()
        } catch (error) {
            console.log(error)
        }
        
    }
    const showStatus =(orderId)=>{
        var {status} = props;
        var result = null;
        if(status === 1){
            result = (
                <td>
                    <button type="button" className="comfirm-order-admin" 
                    onClick={()=>setStatusOrder(orderId,2)}
                    >Chuẩn bị hàng</button>
                    <button type="button" className="comfirm-order-admin-h" 
                    onClick={()=>setStatusOrder(orderId,4)}><i className="fas fa-trash-alt"/>Hủy</button>
                </td>
            )
        }
        if(status === 2){
            result=(
                <td>
                    <button type="button" className="comfirm-order-admin-h">Đang giao</button>
                </td>
            )
        }
        if(status === 3){
            result=(
                <td>
                    <button type="button" className="comfirm-order-admin-h">Thành công</button>
                </td>
            )
        }
        if(status === 4){
            result=(
                <td>
                    <button type="button" className="comfirm-order-admin-h">Đã hủy</button>
                </td>
            )
        }
        return result
    } 
    const showOrderItems =()=>{
        var {orderItems,statusOrder} = props;
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
                        {/* <td>
                            <button type="button" className="comfirm-order-admin" 
                            onClick={()=>setStatusOrder(orderId,2)} style={{display : btItem}}
                            >Chuẩn bị hàng</button>
                            <button type="button" className="comfirm-order-admin-h" style={{display : btItem}} 
                            onClick={()=>setStatusOrder(orderId,4)}><i className="fas fa-trash-alt"/>Hủy</button>
                            <button type="button" className="comfirm-order-admin" 
                            style={{display : btItem}}
                            >Thành công</button>
                        </td> */}
                        {showStatus(orderId)}
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