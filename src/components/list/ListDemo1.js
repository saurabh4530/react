import React from 'react'

export default function ListDemo1() {
    const cars=["tata","honda", "maruti","toyota","hyundai"]
  return (
<>
<div>ListDemo</div>

{cars.map((car, ind)=>{
    return <div key={ind}>{car}</div>
})}

<hr />

<ol>
    {cars.map((car,ind)=>{
        return<li key={ind}>{car}</li>
    })}
</ol>
</>  )
}
