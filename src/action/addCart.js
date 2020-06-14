import * as Types from '../constant/action';
export const AddCart = (dataCart) =>{
    return {
        type : Types.ADDCART,
        dataCart
    }
}