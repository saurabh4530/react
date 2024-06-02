//@ts-nocheck
import React ,{useEffect, useRef, useState} from 'react'

export default function RefDemo2() {
    const [name, setName] = useState("saurabh")
    const myref=useRef()
useEffect(()=>{
   myref.val=name
})

  return (<>
  <div>RefDemo2</div>
 <div> current name:{name} and Previous name:{ myref.val}</div>
 <button onClick={()=>{setName("mahesh")}}>ChangeName</button>
 <button className='ms-1' onClick={()=>{setName("gangadhar")}}>ChangeName2</button>
  </>
  )
}
