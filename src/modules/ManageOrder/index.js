import React ,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CallApi from '../../utils/Api5004';
import OrderManager from './component/OrderManager';
import Loadings from '../../common/loading/loadingUpdate';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [Loading , setLoading] = useState(true)
    const [value, setValue] = useState(0);
    const [listOrder,setListOrder] = useState(""); 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const getListOrder = async ()=>{
        var token = localStorage.getItem("token");
        var user = JSON.parse(localStorage.getItem("userName"));
        var resp = await CallApi("/order/shop/"+ user.sub,"GET",token,null);
        setLoading(false)
        setListOrder(resp.data.data)
    }
    const setListOrderItem=()=>{
        getListOrder()
    }
    useEffect(() => {
        getListOrder()
    },[])
    const setStatus =(status)=>{
        var string = "";
        switch(status){
            case 1 : string = "Chưa xử lý" ;break;
            case 2 : string = "Đã xử lý" ;break;
            case 3 : string = "Đã giao" ;break;
            case 4 : string = "Đã hủy" ;break;
            default : break;
        }
        return string
    }
    const showOrder = () =>{
        var result = "";
        if(listOrder !== ""){
            result = listOrder.map((item,index)=>{
                
                var statusOrder = setStatus(item.status);
                return(
                    <OrderManager key={index} orderItems={item.orderItems}
                        orderId={item.orderId} fullname={item.fullname}
                        setListOrderItem={setListOrderItem} statusOrder={statusOrder}
                        status={item.status}
                    />
                )
            })
        }
        return result;
    }
    if(Loading){
        return(
            <Loadings load={"block"} />
        )
    }
    else{
        return (
            <div className="product_admin">
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        
                    >
                        <Tab label="Tất cả" />
                        <Tab label="Chưa xử lý" />
                        <Tab label="Đã xử lý" />
                        <Tab label="Đã giao" />
                        <Tab label="Đã hủy" />
                    </Tabs>
                </Paper>
                <form className="form-inline my-2 my-lg-0" id="product-admin1">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Nhập tên sản phẩm"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Tìm kiếm
                    </button>
                </form>
                <div className="col-12">
                    <nav className="navbar order-admin">
                        <span className="navbar-brand mb-0 h1">Đơn hàng</span>
                    </nav>
                </div>
                <div className="col-12 table-admin">
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col" style={{width : "50%"}}>Sản phẩm</th>
                            <th scope="col" style={{width : "20%"}}>Tổng đơn hàng</th>
                            <th scope="col" style={{width : "18%"}}>Trạng thái</th>
                            <th scope="col" style={{width : "12%"}}>Thao tác</th>
                        </tr>
                        </thead>
                    </table>
                    {showOrder()}
                </div>
            </div>
        );
    }
}