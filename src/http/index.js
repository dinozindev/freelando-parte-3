import axios from "axios";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";

const http = axios.create({
    baseURL: 'http://localhost:8080/'
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
    const token = ArmazenadorToken.obterAccessToken;
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("Token foi adicionado ao cabeçalho.")
    }
    // Do something before request is sent 
    return config;
}, function (error) {
    // Do something with request error return
    return Promise.reject(error);
});

export default http