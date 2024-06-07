import React, { useState } from 'react'

export default function     UseStateDemo1() {
    const [color,setColor]=useState("red")

    const changeColor=()=>{
    setColor("blue")
    }
  return (
    <>
    <h1>my favorite color is {color}!</h1>
    <button onClick={changeColor}>blue</button>
    </>
  )
}
 