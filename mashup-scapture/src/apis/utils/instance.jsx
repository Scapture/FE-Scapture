import axios from "axios"

const BASE_URL = "http://54.174.226.155:8080"

const defaultApi = axios.create({
    baseURL : BASE_URL,
    headers : {
        "Content-Type":"application/json",
    }
})

export const defualtInstance = defaultApi