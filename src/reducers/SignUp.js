import * as types from '../constant/action';
var initialState = {
    status : false,
    dataUser : JSON.parse(localStorage.getItem('userName'))
}
const SignUp = (state = initialState , action) => {
    switch (action.type) {
        case types.SIGNUP: 
        return  {
            status : true,
            dataUser : JSON.parse(localStorage.getItem('userName'))
        };
        default : return state;
    }
}
export default SignUp;