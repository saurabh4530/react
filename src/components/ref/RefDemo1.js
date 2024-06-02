// @ts-nocheck
import React ,{useState} from 'react'
import { useRef ,useEffect} from 'react'

export default function RefDemo1() {
    const [count, setcount] = useState(0)
    const myRef=useRef()
    
useEffect(() => {
    myRef.val=count
    console.log("useEffect is called...");

  return () => {
    
  };
}, )
  return (
  <>
  {console.log("render is called.....")}
    <div>RefDemo1</div>
NOW :{count}, before:{myRef.val}
<button className='ms-1' onClick={()=>{setcount(count+1)}}>incremennt</button>

  </>
  )
}
