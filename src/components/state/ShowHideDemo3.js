import React, { useState } from "react";

export default function ShowHideDemo3() {
  let [isVisible, setIsVisible] = useState(false);

//   const toggle = () => {
//     setIsVisible(!isVisible);
//   };

  return (
    <>
      <h1>toggle paragraph using useState</h1>
      <button onClick={()=>{setIsVisible(!isVisible)}}>{isVisible ? "Hide" : "Show"}</button>

      {/* {isVisible && <h2>this is Heading</h2>}  */}

      {isVisible?<h2>this is Heading ......</h2>: null}
    </>
  );
}
