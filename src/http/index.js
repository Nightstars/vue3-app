import axios from "axios";

//axios.create 创建axios 实例
const  http=axios.create({
    baseURL: '',
    timeout: 1000,
    //headers: {'': ''}
});

//添加请求拦截器
http.interceptors.request.use(function (config) {
    config.headers.token='1234567890';
    return config;
},function (error) {
    //d对请求错误做些什么
    return Promise.reject(error);
})

//添加响应拦截器
http.interceptors.response.use(function (response) {
    return response.data;
},function (error) {
    //对响应错误做些什么
    return Promise.reject(error);
})

export default  http