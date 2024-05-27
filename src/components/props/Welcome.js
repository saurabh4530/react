import React from 'react'

export default function Welcome(props) {
  return (
    <>
    <h3>this is welcome components</h3>
    <h3>this is static text</h3>
    <h3>{props.children}</h3>
    
    </>
  )
}
