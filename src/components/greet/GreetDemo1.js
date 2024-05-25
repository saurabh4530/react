import React from 'react'
import PropTypes from "prop-types"
export default function GreetDemo1({name,msg, age}) {
  
  return (
    <>
    <div>GreetDemo1</div>
    <div> hello {name},{ msg} {age}</div>
    </>
  )
}
GreetDemo1.propTypes={
  name:PropTypes.string.isRequired,
  msg:PropTypes.string,
  age:PropTypes.number
}
