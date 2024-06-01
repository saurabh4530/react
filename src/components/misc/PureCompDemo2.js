import React, { useState } from 'react'

export default function PureCompDemo2() {
    const [name,setName]=useState("saurabh");

   let  changeName=()=>{
    setName("saurabh")

   }
  return (
   <>
  { console.log("render is callled")}
    <div>PureCompDemo2</div>
    <div>name:{name}</div>
    <button onClick={changeName}>Change name</button>
   </>
  )
}
