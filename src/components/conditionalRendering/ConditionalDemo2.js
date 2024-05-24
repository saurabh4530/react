import React from 'react'

export default function ConditionalDemo2() {
const num=10;
//  if else
if (num%2===0) {
    return <h1>{num} is even</h1>
} else {
    return <h1>{num} is odd   </h1>
    
}
}
