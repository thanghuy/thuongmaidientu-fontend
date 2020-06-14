import { combineReducers} from "redux";
import status from './SignUp';
import AddCart from './addCart';
import UserName from './userName';
import Address from './address';
import ActiveMenu from './MenuAdmin';
const appReducers = combineReducers({
    status : status,
    dataUser : status,
    dataCart :AddCart,
    activeForm : AddCart,
    userName : UserName,
    dataAddress : Address,
    ActiveMenu
});
export default appReducers;