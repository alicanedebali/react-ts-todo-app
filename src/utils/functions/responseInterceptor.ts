import axios from "axios";

export const responseInterceptor =()=>{
    axios.interceptors.response.use((response)=> {
        console.log(response.config.method)
        // Do something before request is sent
        return response;
    }, function (error) {
        console.error(error)
        // Do something with request error
        return Promise.reject(error);
    });
}