import axios from "axios";
import * as authen from '../common/services/AuthService'
export default function callApi(endppiont,method = "GET",body,token){
    const url =  "https://localhost:5002/api/"+endppiont;
    return axios({
            method : method,
            url : url,
            headers: {
                Authorization:"Bearer " + token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }, 
            data : body
        }).catch(err => {
            console.log(err)
            if(err.response.status === 401){
                window.confirm("Phiên đăng nhập của bạn đã hết hạn !!! mời bạn đăng nhập lại");
                if(window.confirm){    
                    localStorage.removeItem("userName");
                    localStorage.removeItem("token");
                    authen.logout();
                }
            }
            
        });
}