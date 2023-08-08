import axios from "axios"
import qs from "qs"
import config from "./config"
import myCookie from "@/utils/MyCookies"

// 创建axios的实例instance，并编写get、post的通用方法，这里还设置了请求拦截器和相应拦截器。 
const instance = axios.create({
    baseURL: config.baseUrl.dev,
    timeout: 60000,
    transformRequest:[
        function(data) {
            data = qs.stringify(data)
            return data
        }
    ],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

instance.interceptors.request.use(config=> {
    console.log('进入请求拦截器')
    let needAuth = true
    if (needAuth) {
        const authToken = myCookie.getBearerAuthToken()
        config.headers.Authorization = `Bearer ${authToken}`
    }
    return config
}, err=> {
    console.log(err)
})

instance.interceptors.response.use(response=> {
    console.log('进入响应拦截器', response)
    const res = response.data
    if (res.code === 200 || res.result) {
        return res.data
    }
    return Promise.reject({
        data: res.data,
        message: res.msg || res.message,
        code: res.code,
        toString() {
            return this.message
        }
    })
}, err=> {
    console.log(err)
})

export default instance;