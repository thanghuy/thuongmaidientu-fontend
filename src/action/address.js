import * as Types from '../constant/action';
export const Address = (dataAddress) =>{
    return {
        type : Types.GET_ADDRESS,
        dataAddress : dataAddress
    }
}