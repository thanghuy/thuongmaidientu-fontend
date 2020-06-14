import axios from "axios";
import * as config from '../constant/config'
export default function callApi(endppiont,method = "GET",content = "application/json",token,body){
    const url = config.url + endppiont;
    return axios({
            method : method,
            url : url,
            headers: {
                Authorization:"Bearer " + token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': content
            }, 
            data : body
        }).catch(err => {
            console.log(err);
        });
}
