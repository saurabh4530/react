import { useState ,useEffect} from "react";
import React from 'react'

export default function UseEffectTwo() {
    let [count,setCount]=useState(0);
    let [name,setName]=useState("");
// Conditionally run effects
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    },[count])


  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>count:{count}</button>

    </div>
  )
}
