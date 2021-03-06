import React ,{ useState} from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector  } from 'react-redux';
import { withRouter,Link} from 'react-router-dom'
import CallApi from '../../utils/Api5004';
import CallApiCart from '../../utils/ApiToken';
import LoadingOrder from '../../common/loading/loadingUpdate';
import FormatNumber from '../../utils/FormatNumber';
const MyCheckoutForm = (props) => {
  const dataCart = useSelector(state => state.dataCart);
  const [loading,setLoading] = useState(false);
  const [sussces,setSussces] = useState(false);
  const [loadingButton,setLoadingButton] = useState(false);
  const getAddressMain =()=>{
    var data = props.dataAddress === "" ? [] : props.dataAddress;
    var Address = "";
    data.map((item)=>{
        if(item.isDefault){
            Address = item;
        }
        return Address
    })
    return Address
}
  const setArrayCart =()=>{
    var List = [];
    if(dataCart.length > 0){
        dataCart.map((item)=>{
            var data = {
                Image : item.imagePath,
                UserId : item.userId,
                Amount : item.amount,
                BookId : item.id,
                FullName : item.fullName,
                Slug : item.slug,
                BookName : item.name,
                BookPrice : item.price
            }
            List.push(data);
            return List;
        })
    }
    return List;
  }   
  const DeleteCart =(id)=>{
    var token = localStorage.getItem('token');
    CallApiCart('cart/',"DELETE",id,token);
  }
const DeleteAllCart =()=>{
    dataCart.forEach(items => {
        DeleteCart(items.id)
    });
}
const AddOrder = (id_payment) =>{
  var token = localStorage.getItem("token");
  var OrderItem = setArrayCart();
  var Address = getAddressMain()
  var data = {
      Address : Address.fullAddress,
      PhoneNumber : Address.phoneNumber,
      FullName : Address.fullName,
      OrderItems : OrderItem,
      PaymentIntent : id_payment
  }
  CallApi("/order","POST",token,data);
}
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingButton(true);
    if (!stripe || !elements) {
      return;
    }
    var token = localStorage.getItem("token");
    var price = getTotalCartItem();
    var paymentIntent = await CallApi("/order/payment","POST",token,price)
    var client_secret = paymentIntent.data.paymentIntent.client_secret;

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });
    if (result.error) {
      setLoadingButton(false);
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setLoading(true)
        await AddOrder(paymentIntent.data.paymentIntent.id);
        DeleteAllCart()
        setSussces(true);
      }
    }
  };
  const getTotalCartItem =()=>{
    var totalCart = 0;
    dataCart.forEach(element => {
        totalCart = totalCart + element.totalPrice;
    });
    return totalCart;
  }
  const getTotalCart =()=>{
    var totalCart = 0;
    dataCart.forEach(element => {
        totalCart = totalCart + element.totalPrice;
    });
    return FormatNumber(totalCart);
  }
  var activeLoading = loadingButton ? <span><i className="fa fa-spinner fa-spin"></i> Đang tải</span>: "Đặt hàng";
  var showSussces = sussces ? "block" : "none";
  return (
    <form onSubmit={handleSubmit}>
      <LoadingOrder load={loading ? "block" : "none"} />
        <div className="content-payment-01" style={{paddingBottom : "20px" , border : "1px solid #ddd"}}>
            <CardElement 
                options={{
                    iconStyle: 'solid',
                    style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                        color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                    },
                }}
            />
        </div>
        <div className="content-payment-01">
            <p>
            Tổng tiền:
            <span className="price-cart-total">{getTotalCart()}</span>
            </p>
            <button className="btn-cart" type="submit" disabled={!stripe} style={{fontSize : "20px"}}>
              {activeLoading}
            </button>
        </div>
        <div className="confirm-de" style={{display : showSussces}}>
            <div className="md-delete container" style={{background :"#f2f3f5"}}>
                <div className="md-delete-tilte">Bạn đã đặt hàng thành công</div>
                <div>
                    <Link to="/user/order">
                      <button className="md-delete-bt" type="button">Xem đơn hàng của bạn</button>
                    </Link>
                    <Link to="/">
                      <button className="md-delete-bt" type="button" style={{background :"#ffffff", color : "black"}}>Tiếp tục mua sắm</button>
                    </Link>
                </div>
            </div>
        </div>
    </form>
  );
};
export default withRouter(MyCheckoutForm);