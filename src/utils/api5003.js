import axios from "axios";
import * as config from '../constant/config'
export default function callApi(endpiont,method = "GET",token,body){
    const url = config.url5003 + endpiont;
    return axios({
            method : method,
            url : url,
            headers: {
                Authorization:"Bearer " + token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': "application/json"
            }, 
            data : body
        })
}
