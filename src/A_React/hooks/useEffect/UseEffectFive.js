import React, { useEffect } from 'react'
import { useState } from 'react'

export default function UseEffectFive() {

const [count, setCount] = useState(0)
   // useEffect with incorrect dependency

let tick=()=>{
    setCount((precount=>precount+1))
}
useEffect(()=>{
    const interval=setInterval(tick,1000)

    return ()=>{
        clearInterval(interval)
    }
}, [])
  return (
    <div>
        count is -
{count}

    </div>
  )
}
