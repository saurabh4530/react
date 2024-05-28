import React, { useState } from 'react'

export default function RemainingChar() {
    const [msg, setMsg]=useState("")
    const [remaining, setRemaining]=useState(100)

let keyUpHandler=(e)=>{
    const msg=e.target.value
setMsg(msg);
setRemaining(100-msg.length)
}
  return (
    <div>
        <h1>RemainingChar</h1> 
      <textarea onKeyUp={keyUpHandler} maxLength={100} className='ms-1' ></textarea>
      <p>Message:{msg}</p>    
      <p>Remaining char:{remaining}</p>



    </div>
  )
}
