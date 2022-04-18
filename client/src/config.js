import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://sosyal-tohum.herokuapp.com/api/"
})