import React, { Component } from 'react';
import Productlist from './ProductList';
import Search from './Search';
import Banner from './HomeBanner';
import '../../assets/produc.css';
import '../../assets/product_reponsive.css';
import callAPi from '../../utils/ApiController';
import {Link,withRouter} from 'react-router-dom';
import Loading from './LoadingPro';
// import Query from '../../utils/getQuery';
const search = window.location.search;
const params = new URLSearchParams(search);
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
            link : ""
        }
    }
    getData = async (query) =>{
        return await callAPi("/book"+query+"&name=book","GET",null).then(resp =>{
            this.setState({
                current : resp.data.current,
                totalPage : resp.data.totalPage,
                product : resp.data.data
            })
        })
    }
    componentDidMount(){ 
        if(search === ""){
            this.getData("?current=1&pageSize=16&name=book")
        }
        else{
            this.getData(search);
            this.setState({ filter : this.getQuery() });
        }
    }
    componentDidUpdate = prevProps => {
        if (this.props.location !== prevProps.location) {
            var query =  this.props.location.search === "" ? "?current=1&pageSize=16&name=book" : this.props.location.search;
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
    replyFilter(){
        var path = this.props.location.pathname;
        var query = this.props.location.search;
        var _filter = path + query;
        return _filter;
    }
    setCurrent(){
        var query = this.props.location.search;
        var pa = new URLSearchParams(query);
        var urlCurrent = "";
        if(pa.get("current") === null){
            urlCurrent = "?current=1";
        }
        else{
            urlCurrent = "";
        }
        return urlCurrent;
    }
    demoa = () =>{
        var query = this.props.location.search;
        var _filter = this.replyFilter();
        var current = this.setCurrent();
        var pa = new URLSearchParams(query);
        if(pa.get("name")=== null){
            _filter = _filter + current + "&name=BanChayNhat";
            this.props.history.push(_filter)
        }
        else{
            this.props.history.push(_filter)
        }
    }
    changeQuery(filter,query1,query2){
        var changeQ = "";
        changeQ = filter.replace(query1,query2)
        return changeQ;
    }
    handleChange = (event) =>{
        var value = event.target.value;
        var query = this.props.location.search;
        var pa = new URLSearchParams(query);
        var _filter = this.replyFilter();
        var urlCurrent = this.setCurrent();
        if(value === "1" && pa.get("sortAsc") === null && pa.get("sortDesc") === null){
            this.props.history.push(_filter + urlCurrent + "&sortAsc=Price")
        }
        else if(value === "2" && pa.get("sortDesc") === null && pa.get("sortAsc") === null){
            this.props.history.push(_filter + urlCurrent + "&sortDesc=Price")
        }
        else if(pa.get("sortDesc") !== null && value === "1"){
            _filter = this.changeQuery(_filter,"&sortDesc=Price","&sortAsc=Price");
            this.props.history.push(_filter)
        }
        else if(pa.get("sortAsc") !== null && value === "2"){
            _filter = this.changeQuery(_filter,"&sortAsc=Price","&sortDesc=Price");
            this.props.history.push(_filter);
        }       
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
        var {active_b1,active_b2,loading} = this.state;
        var active1 = active_b1 ? "active_b" : "";
        var active2 = active_b2 ? "active_b" : "";
        var load = loading ? <Loading/> : "";
        return (
            <div>
                {load}
                <Banner/>
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
                        {this.showProduct()}
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
}

export default withRouter(Content);
