import axios from "./axios";


export  const getMenu = (parrm) => {
    return axios.request({
        url:'/permission/getMenu',
        method:'post',
        data: parrm
    })
}

export const getData = () =>{
    return axios.request({
        url: '/home/getData'
    })
}