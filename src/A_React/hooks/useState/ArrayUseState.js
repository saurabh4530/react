import React, { useState } from 'react'

export default function ArrayUseState() {
let [names, setNames]=useState([]);

const addNames = (name) => {
    // @ts-ignore
    setNames((prevNames) => [...prevNames, name]);  
  };




    let handleSubmit=(e)=>{
        e.preventDefault();
addNames(e.target.name.value)
e.target.name.value=""

    }
  return (<>
  <div>ArrayUseState</div> 
<form  onSubmit={handleSubmit}>
<input type="text" name='name' placeholder='enter the name '/>
  <button type="submit">Add names</button>
</form>
<ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li> 
        ))}
      </ul>
  
  </>
  )
}
