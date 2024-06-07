import React ,{useState,useMemo}from 'react'

export default function UseMeMODemo() {
    const [number,setNumber]=useState(0);
    const [count,setCount]=useState(0);
    function cubeNum(num) {
        console.log("cal done");
        return Math.pow(num,3)
    }
    const result=useMemo(()=>{return cubeNum(number)}, [number])
  return (
    <>
    
    <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
    <h1>cube 0f number:{result}</h1>
    <button onClick={()=>{setCount(count+1)}}>Counter++</button>
    <h1>count:{count}</h1>
    </>
  )
}
