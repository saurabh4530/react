//@ts-nocheck
import React, { useReducer } from 'react'

const initialState={count:0}
const reducer=(state,action)=>{
    switch (action.type) {
        case "increment":
            return { count:state.count+1}
            
            break;
        case "decrement":
            return { count:state.count-1}
            
            break;
    
        case "input":
            return {count:action.payload }
            
            break;
    
        default:return state;
        break;
            
    }
}

function UseReducerDemo1() {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    <h1>Count:{state.count}</h1>
    <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
  <br />
  <input value={state.count} type="number"  onChange={(e)=>{dispatch({type:"input",payload:Number(e.target.value)})}}/>
  
    </>
  )
}

export default UseReducerDemo1