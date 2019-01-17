import axios from 'axios'
var instance = axios.create({
    baseURL:'http://yapi.demo.qunar.com/mock/14813',
    timeout:10000,
})
export default instance
