import React, { useState } from 'react'
import MemoDemo2 from './MemoDemo2'

export default function MemoDemo1() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("saurabh");
    let increment=()=>{
setCount(count+1)
    }
    let changeName=()=>{
        setName("amar")
    }
  return (<>
  <div>MemoDemo1-Parent Component</div>
<button onClick={increment}>Increment</button>
<button onClick={changeName} className='ms-1'>Name Change</button>  
  <MemoDemo2 name={name} />
  </>
  )
}
