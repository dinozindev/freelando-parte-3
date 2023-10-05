import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'http://localhost:8080/'
})

export default httpInstance