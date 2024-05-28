import React, { useState } from 'react'

export default function TogglePassword1() {
   const [flag, setFlag]= useState(true);
  return (
   <>
   <div>

         <input type={flag?"password":"text"} className='m-1'/>   
         <input type='checkbox' onChange={()=>setFlag(!flag)}/>
   <button className='ms-1' onClick={()=>setFlag(!flag)}>{flag?"Show":"Hide "}  Password</button>

   </div>
   
   </>
  )
}
