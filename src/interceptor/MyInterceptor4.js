import axios from 'axios'
import React from 'react'
import client from '../components/HTTP/api';

export  function MyInterceptor4() {
client.interceptors.response.use((req)=>{
 console.log(req,"axios client" );
 return req
})
}
