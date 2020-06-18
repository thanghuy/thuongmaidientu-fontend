import * as Types from '../constant/action';
export const AddOrder = (dataOrder) =>{
    return {
        type : Types.PAYMENT,
        dataOrder
    }
}