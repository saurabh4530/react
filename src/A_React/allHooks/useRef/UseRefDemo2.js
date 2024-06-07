import React,{useRef} from 'react'

export default function UseRefDemo2() {
const inputElem=useRef()
const btnClick=(e)=>{
    console.log(inputElem.current);
    inputElem.current.style.background="red";
    
}
  return (
  <>
  <input type="text" ref={inputElem}/>
  <button onClick={btnClick}>click here</button>
  </>
  )
}
