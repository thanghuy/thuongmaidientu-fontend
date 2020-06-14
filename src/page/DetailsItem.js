import React, { Component } from 'react';
// import ImgProduct from './ImgProduct';
import InforProduct from '../components/DetailsItem/InforProduct';
import DetailPro from '../components/DetailsItem/productDetails';
import ProductReview from '../components/DetailsItem/productReviews';
import '../assets/css/detailProduct.css';
import '../assets/css/detail_reponsive.css';
import CallApi from '../utils/ApiController';
import SekeletonDeatail from '../common/sekeletonDetailP';
class Detailitem extends Component {
    constructor(props){
        super(props);
        this.state = {
            OneProduct : "",
            loading : false
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
    componentDidMount(){
        var {match} = this.props;
        let idBook = match.params.id;
        this.getDataDetail(idBook)
    }
    render() {
        var {match} = this.props;
        let idBook = match.params.id;
        if(!this.state.loading) {
            return (
                <div className="col-12">
                    <div className="container">
                        <InforProduct OneProduct={this.state.OneProduct}/>
                        {/* <DetailPro OneProduct={this.state.OneProduct}/> */}
                        <ProductReview OneProduct={this.state.OneProduct} idBook={idBook}/>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="col-12">
                    <div className="container detail_content_container">
                        <SekeletonDeatail/>
                    </div>
                </div>
            )
        }
    }
}

export default Detailitem;