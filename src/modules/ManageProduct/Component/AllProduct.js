import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Pagination from '@material-ui/lab/Pagination';
import CallApi from '../../../utils/ApiController';
import FormatNumber from '../../../utils/FormatNumber';
import * as UrlImg from '../../../constant/config';
// import {Link} from "react-router-dom";z
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  const AllProduct = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state,setState] = useState({
    productList : null,
    totalPage : 0,
    page : 1
  })
  const getAllProduct = (page) =>{
    var user = JSON.parse(localStorage.getItem("userName"));
      CallApi("/book?userid="+user.sub+"&current="+page+"&pageSize=10","GET",null,null).then(resp =>{
        setState(prev =>({
          ...prev,
          productList : resp.data.data,
          totalPage : resp.data.totalPage,
          page : resp.data.current
        }))
      })
  }
  useEffect(() => {
    getAllProduct(1)  
  },[])
  const showAllProduct = () =>{
    var {productList} = state;
    var result = null;
    if(productList !== null){
      result = productList.map((product,index)=>{
          return(
            <tr className="all-admin-list-product" key={index}>
              <td>
                <div className="img-all-admin">
                  <span onClick={()=> window.open(`/product/${product.slug}.${product.bookId}.html`)}>
                    <img src={UrlImg.urlImg + product.imagePath} alt="demo"/>
                    <p>{product.name}</p>
                  </span>
                </div>
              </td>
              <td>{product.category.name}</td>
              <td className="price">{FormatNumber(product.price)}</td>
              <td>{product.amount}</td>
              <td>x</td>
              <td>
                  <button type="button" className="update-product-admin">Sửa</button>
                  <button type="button" className="update-product-admin">Xóa</button>
              </td>
            </tr>
          );
      })
    }
    return result;
  }
    const setPageProduct = (event, value) => {
      getAllProduct(value)
    };
    var {totalPage,page} = state;
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
                  <Tab label="Còn hàng" />
                  <Tab label="Hết hàng" />
                  <Tab label="Đã khóa" />
                  <Tab label="Đã ẩn" />
              </Tabs>
          </Paper>
          <div className="row">
            <div className="col-lg-12 add-new-main all-admin-product">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" style={{width : "35%"}}>Tên sản phẩm</th>
                    <th scope="col" style={{width : "20%"}}>Danh mục</th>
                    <th scope="col" style={{width : "15%"}}>Giá</th>
                    <th scope="col" style={{width : "10%"}}>Số lượng</th>
                    <th scope="col" style={{width : "10%"}}>Hiển thị</th>
                    <th scope="col" style={{width : "10%"}}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>{showAllProduct()}</tbody>
              </table>
              <div className="col-5 float-right">
                  <Pagination count={totalPage} page={page} onChange={setPageProduct} color="primary" variant="outlined" shape="rounded"/>
              </div>
            </div>
          </div>
        </div>
    );
};

export default AllProduct;