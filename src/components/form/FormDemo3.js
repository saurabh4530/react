import React, { useState } from 'react'

export default function FormDemo3() {
    const [user,setUser]=useState({fName:"saurabh",lName:"kakade"})

     
  return (<>
  <div>FormDemo3  form data in obj</div>
  <form  >
    <p>
        FirstName:
        <input name="fName" value={user.fName} onChange={(e)=>{
    setUser({...user,fName:e.target.value})
        }}/>
    </p>
    <p>
        LastName:
        <input name="lName" value={user.lName} onChange={(e)=>{
    setUser({...user,lName:e.target.value})
        }}/>
    </p>
    <button>Submit</button>
  </form>
  <p>{user.fName}  { user.lName}</p>
  </>
  )
}
