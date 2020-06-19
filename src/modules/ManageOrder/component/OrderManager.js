import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import imga from '../../../assets/images/avatar.png'
import FormatNumber from '../../../utils/FormatNumber';
import * as url from '../../../constant/config';
import CallApi from '../../../utils/Api5004';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Loadings from '../../../common/loading/loadingUpdate';
const OrderManager = (props) => {
    const [Loading,setLoading] = useState(false);
    const setStatusOrder = async (id,method,status) =>{
        try {
            setLoading(true);
            var token = localStorage.getItem("token");
            await CallApi("/order/"+id,method,token,status);
            props.setListOrderItem()
            setLoading(false);
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
                    <Button variant="outlined" color="primary"
                        onClick={()=>setStatusOrder(orderId,"PUT",2)}
                    >
                        Chuẩn bị hàng
                    </Button>
                    <hr/>
                    <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        color="primary"
                        onClick={()=>setStatusOrder(orderId,"DELETE",null)}
                    >
                       Hủy đơn
                    </Button>
                </td>
            )
        }
        if(status === 2){
            result=(
                <td>
                    <Button
                        variant="outlined"
                        color="primary"
                    >
                       Đang giao
                    </Button>
                </td>
            )
        }
        if(status === 3){
            result=(
                <td>
                    <Button variant="outlined" color="secondary">
                    Thành công
                    </Button>
                </td>
            )
        }
        if(status === 4){
            result=(
                <td>
                    <Button variant="outlined">
                     Đã hủy
                    </Button>
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
                        {showStatus(orderId)}
                    </tr>
                </tbody>
            )
        })
        return result;
    } 
    var {orderId,fullname} = props;
    if(Loading) return( <Loadings load="block" /> )
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