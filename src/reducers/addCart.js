import * as types from '../constant/action';
var initalSate = [];
const AddCart = (state = initalSate , action) => {
    switch (action.type) {
        case types.ADDCART:
            state = action.dataCart
        return  [...state];
        default : return state;
    }
}
export default AddCart;