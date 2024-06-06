import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UseEffectFetchData1() {
const [posts, setPosts]=useState([])


useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
        console.log(res);
        setPosts(res.data)
    }).catch(err=>console.log(err))
},[])


  return (
    <div>
<ul>
    {
// @ts-ignore
posts.map(post=><li key={post.id}>{post.title}</li>)  
 }
</ul>


    </div>
  )
}
