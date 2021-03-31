import http from './index'

export const getData=http.get('http://jsonplaceholder.typicode.com/posts');