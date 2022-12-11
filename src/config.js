import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://mern-stack-trial.netlify.app/"
    // baseURL: "http://localhost:5000"
})