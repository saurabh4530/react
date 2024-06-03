import axios from 'axios'
import React from 'react'
import client from './api'


export default function HttpDemo4() {
    const fetchData=async()=>{
    //     const promise1=axios.get("https://jsonplaceholder.typicode.com/users")
    //     const promise2=axios.get("https://jsonplaceholder.typicode.com/todos")
    const promise1=client.get("/users")
    const promise2=client.get("/todos")
 const [data1,data2]=await axios.all([promise1,promise2])
console.log(data1.data,data2.data);
    }
  return (<>
  <div>HttpDemo4</div>
<button onClick={fetchData}>Fetch</button>
  
  </>
  )
}
