import React, { useState,useEffect, useRef } from 'react'

export default function UseRefDemo1() {
 const [value,setValue]=useState(0)
const count=useRef(0 )
useEffect(() => {
  count.current=count.current+1

  return () => {
    
  }
}, )

 
 
  return (
  <>
<button onClick={()=>{setValue((prev)=>prev-1)}}>-1</button>
<h1>{value}</h1>
<button onClick={()=>{setValue((prev)=>prev+1)}}>+1</button>

<h1>render count:{count.current}</h1>
  </>
  )
}
