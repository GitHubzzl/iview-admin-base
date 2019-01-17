import axios from './axios'
export default {
    install:(Vue,options)=>{
        Vue.prototype.$axios = axios
        Vue.prototype.isAuth = function() {
            return true;
        }
    }
}