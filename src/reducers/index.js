import { combineReducers} from "redux";
import status from './SignUp';
import AddCart from './addCart';
import UserName from './userName';
import Address from './address';
import ActiveMenu from './MenuAdmin';
import AddOrderItem from './CheckPayment';
import Comment from './comment';
const appReducers = combineReducers({
    status : status,
    dataUser : status,
    dataCart :AddCart,
    activeForm : AddCart,
    userName : UserName,
    dataAddress : Address,
    ActiveMenu,
    AddOrderItem,
    dataComment : Comment
});
export default appReducers;