import * as types from '../constant/action';
var userName = JSON.parse(localStorage.getItem("userName"));
const UserName = (state = userName , action) => {
    switch (action.type) {
        case types.UserName:
            state = action.dataUsername
        return  state;
        default : return state;
    }
}
export default UserName;