import React,{useEffect, useState} from 'react'
import client from './api'

export default function HttpDemo3() {
    const [users, setUsers] = useState([])
const fetchUsers=async()=>{
    const response=await client.get("/users")
    setUsers(response.data)
    
    const comments=await client.get("/comments")
    console.log(comments);


}

    useEffect(()=>{
        fetchUsers()
    },[])



  return (<>
  <h2 className='text-center'>HttpDemo3:- Users list using Client Axios</h2>
  <ul>
    {
        users.map((user,ind)=>{
            return <li key={ind}>{user.name} </li>
        })
    }
  </ul>
  
  
  </>
  )
}
