import React, { useState,useEffect } from 'react';
import {withRouter,useLocation} from 'react-router-dom';
import InfoOrder from './Order';
import DetailOrder from './DetailsOrder';
import axios from 'axios';
import SekeletonOrder from '../../../common/Sekeleton/sekeletonOrder'
const IndexOrder = (props) => {
    let url = useLocation();
    const [loading,setLoading] = useState(false);
    const [dataOrder , setDataOrder] = useState([]);  
    const [total,setTotal] = useState(0); 
    const getDataOrder = async () =>{
        setLoading(true)
        var token = localStorage.getItem("token");
        try {
            var resp = await axios({
                method : "GET",
                url : "https://localhost:5004/api/order",
                headers: {
                    Authorization:"Bearer " + token,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }, 
                data : null
            });
            setDataOrder(resp.data.data)
            setTotal(resp.data.totalAllPrice)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    const setDataOrderItem =()=>{
        getDataOrder()
    }
    useEffect(() => {
        getDataOrder()
    },[])
    if(loading){
        return(
            <SekeletonOrder/>
        )
    }
    if(url.search === ""){
        return (
            <InfoOrder  dataOrder={dataOrder} totalAllPrice={total}/>
        );
    }
    if(url.search !== ""){
        return (
            <DetailOrder dataOrder={dataOrder} setDataOrderItem={setDataOrderItem}/>
        )
    }
};

export default withRouter(IndexOrder);