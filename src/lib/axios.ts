import axios from "axios"

export const api = axios.create({
  baseURL: "https://api.github.com",
  //baseURL: "http://localhost:3334",
})