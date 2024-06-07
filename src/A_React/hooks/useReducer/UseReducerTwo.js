// @ts-nocheck
import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
let reducer = (state, action) => {
  switch (action.type) {// passing multiple operation
    case "increment":
      return {...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state,firstCounter: state.firstCounter - action.value };
    case "increment2":
      return {...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state,secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;

    default:
      return state;
  }
};
export default function UseReducerTwo() {
  const [count, Dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div> firstcount={count.firstCounter}</div>
      <button onClick={() =>Dispatch({ type: "increment", value:1 })}> increment</button>
      <span> </span>
      <button onClick={() =>Dispatch({ type: "decrement", value: 1 })}>decrement</button>
      <span> </span>
      <button onClick={() =>Dispatch({type: "reset" }) }>reset</button>
      <br />
      <br />
      <br />
    
    <div>second Counter={count.secondCounter}</div>
      <button onClick={()=>Dispatch( {type:"increment2",value:2})}>increment</button>
      <button onClick={()=>Dispatch( {type:"decrement2",value:5})}>decrement</button>
      <button onClick={()=>Dispatch({type:"reset"})}>reset</button>
      
    </div>
  );
}
