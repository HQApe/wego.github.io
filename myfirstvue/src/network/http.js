import axios from "axios"
import qs from "qs"
import config from "./config"

// 创建axios的实例instance，并编写get、post的通用方法，这里还设置了请求拦截器和相应拦截器。 
const AuthToken = "U2FsdGVkX18wNzdjYjllYzNjMTc0NDcx6wX1k2iWJMbD8mcvhviZNVVvZls/Uw56uYBXuFWtVbfpjc/CalYJbCIRLVfTtd03bh0p/VvLBZkxsc8+G17v3qfy4HTNU2waYIuHf+uRhby3ijNi5mfZTsNKFEI9ryotDa4pd/h3kSOeRHuTT8WIzw=="
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

const downloadInstance = axios.create({
    baseURL:config.baseUrl.dev,
    timeout: 60000,
    responseType: 'blob',
    withCredentials: true,
    crossDomain: true,
    transformRequest: [
        function(data) {
            data = qs.stringify(data);
            return data
        }
    ],
    headers: {
        'apiVersion': 'v1'
    }
})


instance.interceptors.request.use(config=> {
    console.log('进入请求拦截器')
    let needAuth = true
    if (needAuth) {
        config.headers.Authorization = `Bearer ${AuthToken}`
    }
    return config
}, err=> {
    console.log(err)
})

instance.interceptors.response.use(res=> {
    console.log('进入响应拦截器')
    return res
}, err=> {
    console.log(err)
})


export function get(url, params={}) {
    return new Promise((resolve, reject)=>{
        instance.get(url, {params: params}).then((response)=> {
            resolve(response)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export function post(url, data={}) {
    return new Promise((resolve, reject)=> {
        instance.post(url, data).then((response)=> {
          resolve(response)  
        }).catch((err)=>{
            reject(err)
        })
    })
}

export function download(url, params={}) {
    return new Promise((resolve, reject)=> {
        downloadInstance.post(url, params).then((response)=> {
            resolve(response)
        }).catch((err)=> {
            reject(err)
        })
    })
} 