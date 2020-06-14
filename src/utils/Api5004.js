import axios from "axios";
export default function callApi(endpiont,method = "GET",token,body){
    const url =  "https://localhost:5004/api" + endpiont;
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
