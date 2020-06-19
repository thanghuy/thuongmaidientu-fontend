import * as Types from '../constant/action';
export const Comment = (dataComment) =>{
    return {
        type : Types.COMMENT,
        dataComment
    }
}