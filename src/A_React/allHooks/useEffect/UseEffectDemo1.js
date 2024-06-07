import React, { useEffect, useState } from 'react'

export default function UseEffectDemo1() {
const [count,setcount]=useState(0)
const [name,setName]=useState("greatstack")
    useEffect(()=>{
      
        setTimeout(()=>{
            setcount(count+1)
            
        },2000) 
    },[name]) 
  return (
   <>
   <h1>i have render {count} times</h1>
   
   </>
  )
}
