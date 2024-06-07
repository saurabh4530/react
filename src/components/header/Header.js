import React from 'react'

 function Header() {
  console.log("header");
  return (
    <h1 style={{
      backgroundColor:"purple",color:"white",
      textAlign:"center",margin:0, 
    }}>TrendsZio</h1>
  )
}
export default React.memo(Header)
