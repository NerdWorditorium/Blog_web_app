import axios from "axios"

const url = "http://localhost:8000/"

export const axios_instance = axios.create({
    baseURL: url
})