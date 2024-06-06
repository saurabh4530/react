import React, { useEffect, useState } from 'react'

export default function UseEffectOne() {
    let [count,setCount]=useState(0);
//its run on each rendering 
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })


  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count:{count}</button>

    </div>
  )
}
