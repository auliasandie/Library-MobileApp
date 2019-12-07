import Axios from 'axios';
const url = 'http://192.168.6.196:8000/api/library';


export const login = (data) => {
    return{
        type: 'LOGIN',
        payload: Axios.post(`http://192.168.6.196:8000/api/library/login`, data)
    }
}

export const logout = (data) => {
    return{
        type: 'LOGOUT'
    }
}

export const register = (data) => {
    return{
        type: 'REGISTER',
        payload: Axios.post(`http://192.168.6.196:8000/api/library/register`, data)
    }
}