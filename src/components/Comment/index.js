import React ,{useState,useEffect} from 'react';
import {Link,withRouter} from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import '../../assets/css/comment.css';
import * as URL from '../../constant/config';
import CallApi from '../../utils/ApiController';
import CallApi5004 from '../../utils/Api5004';
import { useForm } from "react-hook-form";

const Index = (props) => {
    const [OneProduct,setOneProduct] = useState("");
    const [rating,setRating]= React.useState(0);
    const [error1,setError1] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const getDataDetail = (idBook) =>{
        CallApi("/book/"+idBook,"GET",null,null).then(resp =>{
            setOneProduct(resp.data.data)
        })
    }
    useEffect(() => {
        var {match} = props;
        var idBook = match.params.id;
        getDataDetail(idBook);
    },[props]);
    const onSubmitRating =data=>{
        AddRating(data.content)
    }
    const AddRating = async (content)=>{
        if(rating !== 0 && rating > 0){
            try {
                setError1(false)
                var {match} = props;
                var OrderId = match.params.OrderId;
                var BuyerId = JSON.parse(localStorage.getItem("userName"));
                var data = {
                    fullName : BuyerId.Fullname,
                    orderItemId : OrderId,
                    BookId : OneProduct.bookId,
                    UserId : OneProduct.userId,
                    BuyerId : BuyerId.sub,
                    Rating : rating,
                    Content : content
                }
                var token = localStorage.getItem("token");
                await CallApi5004("/rating","POST",token,data);
                props.history.push(`/product/${OneProduct.slug}.${OneProduct.bookId}.html`)
            } catch (error) {
                alert("Bạn đã đánh giá sản phẩm này")
            }
        }
        else{
            setError1(true)
        }
    }
    const showRating =()=>{
        var result = null;
        if(parseInt(OneProduct.rating) > 0){
            result = (
                <Rating name="read-only" value={parseInt(OneProduct.rating)} readOnly />
            )
        }
        return result;
    }
    var img = OneProduct.imagePath === undefined ?"/Images/book1.jpg" :  OneProduct.imagePath;
    var imageMain = URL.urlImg + img;
    var Message1 = error1 ? "block" : "none";
    return (
        <div className="container">
            <div className="product-review-comment row">
                <h3 className="js-customer-h3">Gửi nhận xét của bạn</h3>
                <div className="product-customer-col-4 col-6">
                <form
                    id="addReviewFrm"
                    className="bv-form"
                    onSubmit={handleSubmit(onSubmitRating)}
                >
                    <div className="rate form-group has-feedback" id="rating_wrapper">
                    <label>1. Đánh giá của bạn về sản phẩm này:</label>
                    <div className="rating-input">
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                    </div>
                    <small
                        className="help-block"
                        data-bv-validator="callback"
                        data-bv-for="rating_star"
                        data-bv-result="NOT_VALIDATED"
                        style={{ display: Message1 }}
                    >
                        Vui lòng chọn đánh giá của bạn về sản phẩm này
                    </small>
                    </div>
                    <div className="review-content form-group has-feedback has-error">
                    <label htmlFor="review_detail">
                        3. Viết nhận xét của bạn vào bên dưới:
                    </label>
                    <textarea
                        placeholder="Nhận xét của bạn về sản phẩm này"
                        className="form-control"
                        name="content"
                        id="review_detail"
                        ref={register({required : true ,minLength: 30})}
                    />
                    <i
                        className="form-control-feedback fa fa-close"
                        data-bv-icon-for="detail"
                        style={{ display: "block" }}
                    />
                    {errors.content && errors.content.type === "required" &&(
                            <small
                            className="help-block"
                            data-bv-validator="callback"
                            data-bv-for="detail"
                            data-bv-result="INVALID"
                            style={{ display: "block" }}
                        >
                            Nội dung chứa ít nhất 30 ký tự
                        </small>          
                    )}
                    {errors.content && errors.content.type === "minLength" &&(
                            <small
                            className="help-block"
                            data-bv-validator="callback"
                            data-bv-for="detail"
                            data-bv-result="INVALID"
                            style={{ display: "block" }}
                        >
                            Nội dung chứa ít nhất 30 ký tự
                        </small>          
                    )}
                    </div>
                    <div className="action">
                    <div className="word-counter" />
                    <div className="checkbox" style={{ display: "none" }}>
                        <label>
                        <input
                            id="show_information"
                            type="checkbox"
                            defaultChecked
                            defaultValue={1}
                        />{" "}
                        Hiển thị thông tin mua hàng trong phần nhận xét
                        </label>
                    </div>
                    <button type="submit" className="btn btn-default btn-add-review ">
                        Gửi nhận xét
                    </button>
                    </div>
                </form>
                </div>
                <div className="product-customer-col-5 col-6">
                <div className="product-detail">
                    <div className="image">
                    <Link to={`/product/${OneProduct.slug}.${OneProduct.bookId}.html`}>
                        <img
                        src={imageMain}
                        alt="11"
                        />
                    </Link>
                    </div>
                    <div className="info">
                    <div className="title">{OneProduct.name}</div>
                    <div itemProp="brand" itemScope itemType="http://schema.org/Brand">
                        <meta itemProp="name" content="LAZA" />
                        <meta
                        itemProp="url"
                        content="http://tiki.vn/thuong-hieu/laza.html"
                        />
                    </div>
                    <div className="item-brand">
                        <div className="item-other">
                        <div
                            itemProp="aggregateRating"
                            itemScope
                            itemType="http://schema.org/AggregateRating"
                        >
                            <meta itemProp="ratingValue" content="3.6" />
                            <meta itemProp="ratingCount" content={33} />
                        </div>
                        <div className="item-rating">
                            <p className="rating">
                            <span className="rating-box">
                                {showRating()}
                            </span>
                            <span>(33 đánh giá)</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default withRouter(Index);