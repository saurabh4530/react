//@ts-nocheck

import React, { useState } from 'react'

export default function EventDemo1() {
    const [num1,setnum1]=useState(0)
    const [num2,setnum2]=useState(0)
    const [sum,setsum]=useState(0)

    // let changeHandler1=(e)=>{
    //     setnum1(e.target.value)

    // }

    // let changeHandler2=(e)=>{
    //     setnum2(e.target.value)

    // }
    //! or
    // let changeHandler=(e)=>{
    //    if (e.target.name==="num1") {
    //     setnum1(e.target.value)
        
    //    } else {
    //     setnum2(e.target.value)
    //    }

    // }

    let addition=(e)=>{
        setsum(+num1 + +num2)
        console.log(e);

    }
  return (
  <>
  <h2 className='text-center'>Addition Example</h2>
  {/* <p>
    enter Numer-1:
    <input onChange={changeHandler} name='num1' />
</p> */}
{/* <p>
  enter Numer-2:
  <input onChange={changeHandler} name='num2' />
</p> */}

  <p>
    enter Numer-1:
    <input onChange={(e)=>setnum1(e.target.value)} name='num1' />
  </p>
  <p>
    enter Numer-2:
    <input onChange={(e)=>setnum2(e.target.value)} name='num2' />
  </p>
  <button onClick={addition}>Add</button>
 <p>sum of {num1} and {num2} is {sum}</p>

  </>
  )
}
