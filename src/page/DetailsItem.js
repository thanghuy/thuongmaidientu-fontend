import React, { Component } from 'react';
// import ImgProduct from './ImgProduct';
import InforProduct from '../components/DetailsItem/InforProduct';
import InforShop from '../components/DetailsItem/InforShop';
import ProductReview from '../components/DetailsItem/productReviews';
import '../assets/css/detailProduct.css';
import '../assets/css/detail_reponsive.css';
import CallApi from '../utils/ApiController';
import SekeletonDeatail from '../common/sekeletonDetailP';
import axios from 'axios';
class Detailitem extends Component {
    constructor(props){
        super(props);
        this.state = {
            OneProduct : "",
            loading : false,
            comment : null
        }
    }
    getDataDetail = (idBook) =>{
        this.setState({loading : true})
        CallApi("/book/"+idBook,"GET",null).then(resp =>{
            this.setState({
                OneProduct : resp.data.data
            })
            this.setState({loading : false})
        })
    }
    getComment = async (idBook)=>{
        var resp = await axios.get("https://localhost:5005/api/comment?bookid="+idBook);
        var isComment = !!resp;
        if(isComment){
            this.setState({
                comment : resp.data.data
            })
        }
    }
    componentDidMount(){
        var {match} = this.props;
        var idBook = match.params.id;
        this.getDataDetail(idBook)
        this.getComment(idBook);
    }
    render() {
        if(!this.state.loading) {
            return (
                <div className="col-12">
                    <div className="container">
                        <InforProduct OneProduct={this.state.OneProduct}/>
                        <InforShop OneProduct={this.state.OneProduct}/>
                        <ProductReview OneProduct={this.state.OneProduct} comment={this.state.comment}/>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="col-12">
                    <div className="container detail_content_container">
                        <SekeletonDeatail />
                    </div>
                </div>
            )
        }
    }
}

export default Detailitem;