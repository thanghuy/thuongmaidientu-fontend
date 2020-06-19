import * as types from '../constant/action';
var initalSate = [];
const Comment = (state = initalSate , action) => {
    switch (action.type) {
        case types.COMMENT:
            state = action.dataComment
        return  [...state];
        default : return state;
    }
}
export default Comment;