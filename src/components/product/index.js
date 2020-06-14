import React, { Component } from 'react';
import Productlist from './ProductList';
import Search from './Search';
import '../../assets/css/produc.css';
import '../../assets/css/product_reponsive.css';
import callAPi from '../../utils/ApiController';
import {Link,withRouter} from 'react-router-dom';
import SekeletonProduct from '../../common/Sekeleton';
import Loading from './LoadingPro';
import QuerySearch from './filter';
import NotifiEmpty from '../../common/Empty/Empty.jsx';
class Content extends Component {
    constructor(props){
        super(props);
        this.state ={
            current : 1,
            totalPage : 0,
            filter : "",
            name : "book",
            pageSize : 16,
            product : [],
            viewPage : false,
            active_b1 : true,
            active_b2 : false,
            loading : false,
            loadingSekeleton : false,
            link : "",
            notification : true
        }
    }
    getData = (query) =>{
        this.setState({
            loadingSekeleton : true
        })
        var {categoryId} = this.props;
        var acticeQuery = categoryId === undefined ? "" : "&categoryId="+categoryId;
        callAPi("/book?"+query+acticeQuery,"GET",null).then(resp =>{
            this.setState({
                current : resp.data.current,
                totalPage : resp.data.totalPage,
                product : resp.data.data,
                loadingSekeleton : false
            })
            if(resp.data.data.length === 0){
                this.setState({
                    notification : false
                })
            }
            else{
                this.setState({
                    notification : true
                })
            }
        }).catch(err =>{
            this.setState({
                notification : false
            })
        })
    }
    componentDidMount(){ 
        var _filter = this.sliptQuery(this.props.location.search);
        this.getData(_filter);
        this.setState({ filter : this.getQuery() });
    }
    sliptQuery(search){
        var querySlit = search.split("?")[1];
        return querySlit;
    }
    componentDidUpdate = prevProps => {
        if (this.props.location !== prevProps.location) {
            var query =  this.sliptQuery(this.props.location.search);
            this.getData(query);
            this.setState({
                filter : this.getQuery()
            })
        }
      };
    getQuery(){
        var path = this.props.location.pathname;
        var query = this.props.location.search;
        var url = path + query;
        var filter = query === "" ? "" : url.split("?")[1].split("&");
        var urlThen = "";
        if(filter === "" || filter[1] === undefined){
            urlThen = "";
        }
        else{
            filter = filter.slice(1);
            urlThen = "&"+filter.join("&");
        }
        return urlThen;
    }
    showProduct = () =>{
        var {product} = this.state;
        var result = null;
        result = product.map((product,index)=>{
            return <Productlist 
            key={index} product={product} viewPage={this.state.viewPage}
            ></Productlist>
        })
        return result;
    }
    nextPage  = (value) =>{
        var {current ,totalPage,filter} = this.state;
        var path = this.props.location.pathname;
        if(value === "prev"){
            current = current - 1 === 0 ? current = 1 : current = current - 1 ;
            this.props.history.push(path + "?current="+current+filter)
        }
        else{
            current = current + 1 > totalPage ? current = totalPage : current = current + 1 ;
            this.props.history.push(path + "?current="+current+filter)
        }
    }
    showPagination = () =>{
        var {current,totalPage,filter} = this.state;
        var query = this.props.location.search;
        var params = new URLSearchParams(query);
        var pageSize = params.get('pageSize');
        if(pageSize === null){
            pageSize = 16;
        }
        var result = [];
        var path = this.props.location.pathname;
        for(var i = 1; i <= totalPage ; i++){
            var active = current === i ? "active-page" : "";    
            result.push(<li className={active} key={i}>
                <Link to={`${path}?current=${i}${filter}`}>{i}</Link>
                </li>)
        }
        return result;
    }
    changeQuery(filter,query1,query2){
        var changeQ = "";
        changeQ = filter.replace(query1,query2)
        return changeQ;
    }
    handleChange = (event) =>{
        var value = event.target.value; 
        var {current}= this.state;
        var filter = this.props.location.search;
        if(value === "1"){
            var query = QuerySearch.getFilter(filter,"sortAsc=Price","sortDesc=Price",current)
            this.props.history.push({search : query})
        }else{
            var query1 = QuerySearch.getFilter(filter,"sortDesc=Price","sortAsc=Price",current)
            this.props.history.push({search : query1})
        }
    }
    demoa = () =>{
        var filter = this.props.location.search;
        var query = QuerySearch.getFilter(filter,"name=BanChayNhat",null)
        this.props.history.push({search :query})
    }
    setView = (value)=>{
        this.setState({
            loading : true
        })
        setTimeout(()=>{
            this.setState({loading : false})
            if(value === 1){
                this.setState({
                    viewPage : false,
                    active_b1 : true,
                    active_b2 : false
                })
            }
            else{
                this.setState({
                    viewPage : true,
                    active_b1 : false,
                    active_b2 : true
                }) 
            }
        },1000)
    }
    render() {
        var {active_b1,active_b2,loading,loadingSekeleton,viewPage,notification} = this.state;
        var active1 = active_b1 ? "active_b" : "";
        var active2 = active_b2 ? "active_b" : "";
        var load = loading ? <Loading/> : "";
        var girdCart = viewPage ? "repeat(1, 1fr)" : "";
        if(notification){
            return (
                <div>
                    {load}
                <div className="container">
                    <div className="shop">
                        <div className="row">
                            <Search/>
                        <div className="col-lg-10">
                            <div className="shop_bar clearfix">
                                <div className="shop_sorting_fo">
                                    <span>Sắp xếp theo</span>
                                </div>
                                <div className="shop_sorting common active-page">
                                    <span>Phổ biến</span>
                                </div>
                                <div className="shop_sorting best_seller">
                                    <span onClick={this.demoa}>Bán chạy</span>
                                </div>
                                <div className="shop_sorting sorting_price">
                                    <select className="form-sorting" value="0" onChange={this.handleChange}>
                                        <option value="0">Giá : </option>
                                        <option value="1">Từ thấp đến cao</option>
                                        <option value="2">Từ cao đến thấp</option>
                                    </select>
                                </div>
                                <div className="view_product">
                                    <span>View : </span>
                                    <button className={`view_product_b ${active1}`} onClick={() =>this.setView(1)}><i className='fas fa-th-large'></i></button>
                                    <button className={`view_product_b ${active2}`} onClick={() =>this.setView(2)}><i className='fas fa-th-list'></i></button>
                                </div>
                            </div>
                            {loadingSekeleton ? <SekeletonProduct viewPage={viewPage}/>:<div className="gird-card-product" style={{gridTemplateColumns : girdCart}}>{this.showProduct()}</div>}
                            <div className="product_grid">
                                <div className="shop_page_nav">
                                    <div className="page_prev d-flex flex-column align-items-center justify-content-center"
                                    onClick={() =>this.nextPage("prev")}
                                    >
                                        <i className="fas fa-chevron-left" />
                                    </div>
                                    <ul className="page_nav d-flex flex-row">
                                        {this.showPagination()}
                                    </ul>
                                <div className="page_next d-flex flex-column align-items-center justify-content-center"
                                    onClick={() =>this.nextPage("nextS")}
                                >
                                    <i className="fas fa-chevron-right" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            );
        }
        else{
            return (
                <div>
                    {load}
                <div className="container">
                    <div className="shop">
                        <div className="row">
                            <Search/>
                        <div className="col-lg-10">
                            <div className="shop_bar clearfix">
                                <div className="shop_sorting_fo">
                                    <span>Sắp xếp theo</span>
                                </div>
                                <div className="shop_sorting common active-page">
                                    <span>Phổ biến</span>
                                </div>
                                <div className="shop_sorting best_seller">
                                    <span onClick={this.demoa}>Bán chạy</span>
                                </div>
                                <div className="shop_sorting sorting_price">
                                    <select className="form-sorting" value="0" onChange={this.handleChange}>
                                        <option value="0">Giá : </option>
                                        <option value="1">Từ thấp đến cao</option>
                                        <option value="2">Từ cao đến thấp</option>
                                    </select>
                                </div>
                                <div className="view_product">
                                    <span>View : </span>
                                    <button className={`view_product_b ${active1}`} onClick={() =>this.setView(1)}><i className='fas fa-th-large'></i></button>
                                    <button className={`view_product_b ${active2}`} onClick={() =>this.setView(2)}><i className='fas fa-th-list'></i></button>
                                </div>
                            </div>
                            <NotifiEmpty message="Tiếp tục mua sắm" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            );
        }
    }
}

export default withRouter(Content);
