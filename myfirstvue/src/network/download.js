import axios from "axios"
import qs from "qs"
import config from "./config"
const download = axios.create({
    baseURL:config.baseUrl.dev,
    timeout: 60000,
    responseType: 'blob',
    transformRequest: [
        function(data) {
            data = qs.stringify(data);
            return data
        }
    ],
    headers: {

    }
})

export default download