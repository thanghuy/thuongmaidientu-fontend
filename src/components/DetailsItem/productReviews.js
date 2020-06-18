import React, { Component } from 'react'
import img from '../../assets/images/avatar.png';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
class productReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment : ""
        }
    }
    
    showRating =()=>{
        var {OneProduct} = this.props;
        var result = "";
        if(parseInt(OneProduct.rating) > 0){
            result = (
                <Rating name="read-only" value={parseInt(OneProduct.rating)} readOnly />
            )
        }
        return result;
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
        this.getComment(this.props.idBook)
    }
    showComment =()=>{
        var  {comment} = this.state;
        var result = "";
        if(comment.length > 0){
            result = comment.map((item,index)=>{
                return(
                    <div className="container-chat" key={index}>
                        <div className="avatar-user">
                            <img
                            src={img}
                            alt="Avatar"
                            style={{ width: "100%" }}
                            />
                        </div>
                        <div className="comment-user">
                            <div className="user-name">
                                <label className="name-reply">{item.fullName}</label>
                                <Rating name="read-only" value={item.rating} readOnly />
                                <label className="time-comment">&ensp;{item.createdDate}</label>
                            </div>
                            <div className="content-comment">
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        else{
            result = (<div className="container-chat"><span className="-rdm01">Không có nhận xét nào !!!</span></div>)
        }
        return result
    }
    render() {
        var {OneProduct} = this.props;
        return (
            <div className="product_review">
                <div className="product_review_title">Đánh giá sản phẩm</div>
                <div className="review_rating">
                    <span className="-rdm01">Đánh giá</span>
                    {this.showRating()}
                    <p>{OneProduct.rating} trung bình trên {OneProduct.rateCount} đánh giá</p>
                    <div className="row-rd1">
                        <div className="side">
                        <div>{OneProduct.rate5} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-5" />
                        </div>
                        </div>
                        <div className="side right">
                            <div>150</div>
                        </div>
                        <div className="side">
                        <div>{OneProduct.rate4} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-4" />
                        </div>
                        </div>
                        <div className="side right">
                        <div>63</div>
                        </div>
                        <div className="side">
                        <div>{OneProduct.rate3} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-3" />
                        </div>
                        </div>
                        <div className="side right">
                        <div>15</div>
                        </div>
                        <div className="side">
                        <div>{OneProduct.rate2} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-2" />
                        </div>
                        </div>
                        <div className="side right">
                        <div>6</div>
                        </div>
                        <div className="side">
                        <div>{OneProduct.rate1} sao</div>
                        </div>
                        <div className="middle">
                        <div className="bar-container">
                            <div className="bar-1" />
                        </div>
                        </div>
                        <div className="side right">
                        <div>20</div>
                        </div>
                    </div>
                </div>
                <div className="product_detail">
                    <div className="detail_title">Chi tiết sản phẩm</div>
                    <div className="detail_content">
                        <p>{OneProduct.content}</p>
                    </div>
                </div>
                <div className="product_review_title">Nhận xét về sản phẩm</div>
                <div className="chat-mesage">
                    {this.showComment()}
                </div>
            </div>
        )
    }
}
export default productReviews