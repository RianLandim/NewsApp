import axios from "axios";

export const key = "77d1c7a9ffef4ec2bf23b2ec633f2537"

const api = axios.create({
        baseURL:"http://newsapi.org/v2/",
        headers: {"X-API-KEY": key }  
    })

export default api;