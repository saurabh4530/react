import React from 'react';
import { useState,useEffect } from 'react';

export default function UseEffectThree() {
let [x,setX]=useState(0)
let [y,setY]=useState(0)
//  run effects only once

let logMousePosition=(e)=>{
console.log("mouse event");
setX(e.clientX);
setY(e.clientY);
}
useEffect(()=>{
    console.log("useeffect called");
    window.addEventListener("mousemove",logMousePosition);


    // for  useEffect with cleanup ie component will Unmount
    //

    return ()=>{
        console.log("component unmounting code");
        window.removeEventListener("mousemove",logMousePosition)

    }

},[])

return(

<div>
    hook X-{x}  Y-{y}
</div>

)
   
}
