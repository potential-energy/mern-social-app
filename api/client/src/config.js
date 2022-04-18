import axios from "axios"

export const axiosInstance = axios.create(
    {baseUrl="https://sosyal-tohum.herokuapp.com/api"}
)