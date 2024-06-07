import React,{useState} from 'react'

export default function UseStatedemo2() {
    const [car, setCar] = useState({
        brand:"ferrari",
        color:"red",
        model:"roma",
        year:"2023"
    })
   let chageColor=()=>{
    setCar((prev )=>{return {...prev,color:"black",brand:"alto"}})
   }
  return (
    <>
    <h1>my {car.brand}</h1>
    <h2>Its {car.color} {car.model} from {car.year}</h2>
    <button onClick={chageColor} >black</button>








    </>
  )
}

