import * as Types from '../constant/action';
export const LoginUser = (dataUsername) =>{
    return {
        type : Types.LOGIN,
        dataUsername
    }
}
export const UserName = (dataUsername) =>{
    return {
        type : Types.UserName,
        dataUsername
    }
} 