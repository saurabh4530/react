import axios from 'axios'
import React from 'react'

export  function MyInterceptor2() {
 axios.interceptors.response.use(
    (res)=>res,
    (err)=>{
        alert("Error interceptor is called....")
        if(err.response.status===404){
            throw new Error(`${err.config.url} not found.......`)
        }
        throw err

    }
 )
}
