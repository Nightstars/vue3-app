import http from "./index";

export const login=(data)=>{
    return http.get('http://jsonplaceholder.typicode.com/posts',data)
}