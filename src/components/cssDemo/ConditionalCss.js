import React from 'react'

export default function ConditionalCss() {
 
    let num= +prompt("enter the number") ;
    let style1={color:"red"}
    let style2={color:"blue"}
  return (
<>
<div>ConditionalCss</div>
<div style={num%2===0?style1:style2}>

    number:{num} is {num%2===0?"even":"odd"}
</div>
{/* alternative we can write */}
<div style={num%2===0?{color:"green"}:{color:"yellow"}}>

    number:{num} is {num%2===0?"even":"odd"}
</div>
<button className={`btn btn-lg ${num%2===0?"btn-success":"btn-danger"}`}>
    add a class dynamically</button>
</>
  )
}
