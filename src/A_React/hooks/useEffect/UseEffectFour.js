import React, { useState } from 'react'
import UseEffectThree from './UseEffectThree';

export default function UseEffectFour() {

let [display,setDisplay]=useState(true);


    // useEffect with cleanup
    //refer UseEffectThree 

  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>toggle Display</button>
        {display && <UseEffectThree/>}
    </div>
  )
}
