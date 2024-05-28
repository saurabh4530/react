import React, {useState} from 'react'

export default function StateDemo2() {
    let [count ,setCount ]= useState(0)
    const increment=()=>{
        setCount((precount)=>count=precount+1);
    }
    
  return (
    <>
    <div>count:{count}</div>
    <button onClick={increment}>Increment</button>
    </>
  )
}
