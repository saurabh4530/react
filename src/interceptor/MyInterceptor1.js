 import React from 'react'
 import axios from 'axios'
 
 export  function MyInterceptor1() {
    axios.interceptors.request.use(req=>{
        req.headers.Authorization="some token"

        return req
    })

    
   
 }
 