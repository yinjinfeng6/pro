// 封装api

import axios from 'axios';
let instance = axios.create({
    baseurl:"/api",
    timeout:3000,
})
export default instance