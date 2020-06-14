import * as types from '../constant/action';
var initalSate = [];
const Address = (state = initalSate , action) => {
    switch (action.type) {
        case types.GET_ADDRESS:
            state = action.dataAddress
        return  [...state];
        default : return state;
    }
}
export default Address;