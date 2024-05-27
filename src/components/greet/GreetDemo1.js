import React from 'react'
import PropTypes from "prop-types"
export default function GreetDemo1({name,msg, age,cars,f1}) {
  
  return (
    <>
    <div>GreetDemo1</div>
    <div> hello {name},{ msg} my age is {age} and i have {cars}</div>
   <button onClick={f1}>click</button>
    </>
  )
}
GreetDemo1.propTypes={
  name:PropTypes.string.isRequired,//required prop
  msg:PropTypes.string,//its optional
  age:PropTypes.number,
  cars:PropTypes.oneOf(["nano", "alto"])
}
