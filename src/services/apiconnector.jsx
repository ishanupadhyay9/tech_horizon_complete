import axios from "axios";
export const axiosInstance = axios.create({});
export const apiConnector =(method, url,bodyData,headers,params)=>{
    console.log("url for the call was",url);
const ans=  axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data:bodyData? bodyData:null,
        headers: headers? headers:null,
        params:params?params:null,

    });
    console.log("api call ans was :",ans);
    return ans;

}
