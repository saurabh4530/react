import React from 'react'

export default function ConditionalDemo1() {
let x=5;
// ternary operator
  return (
   <h1>{x%2===0?`${x} is even`:`${x} is odd`}</h1>
  )
}
