import * as types from '../constant/action';
var initalSate = [];
const AddOrderItem = (state = initalSate , action) => {
    switch (action.type) {
        case types.PAYMENT:
            state = action.dataOrder;
        return  {...state};
        default : return state;
    }
}
export default AddOrderItem;