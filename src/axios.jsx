import axios from "axios";
   import { baseUrl } from "./Constands/constand";
const instance = axios.create({
    baseURL:baseUrl,
})

export default instance