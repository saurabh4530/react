import axios from 'axios'
import React from 'react'

export  function MyInterceptor3() {
axios.interceptors.response.use((res)=>{
    if (res.data) {
        return res.data;
    }
    else{
        return res;
    }
})
}
