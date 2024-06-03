import React,{useEffect, useState} from 'react'
import axios from "axios"
export default function HttpDemo2() {
    const [users,setUsers]=useState([])
const fetchUsers=()=>{
const url="https://jsonplaceholder.typicode.com/users";
axios.get(url).then(response=>{
    console.log(response)
    setUsers(response)

}).catch((error)=>{
    console.log(error);
})

};
  
useEffect(()=>{
    fetchUsers()
},[])
    
  return (<>
 <h2 className='text-center'>Users-List using Axios</h2>
 <ul>
    {
        users.map((user,ind)=>{
       return <li key={ind}>{user.name}</li>
       
        })
    }
 </ul>
  
  
  </>
  )
}
