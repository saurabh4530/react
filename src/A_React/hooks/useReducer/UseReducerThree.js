// @ts-nocheck
import React, { useReducer } from "react";

const initialState = 0;
let reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};
export default function UseReducerThree() {
  const [count, Dispatch] = useReducer(reducer, initialState);
  const [countTwo, DispatchTwo] = useReducer(reducer, initialState);//  passing multiple reducer to same 

  return (
    <><div>
    <div>count={count}</div>
    <button onClick={() =>Dispatch( "increment") }>increment</button>
    <span> </span>
    <button onClick={() =>Dispatch("decrement")}>decrement</button>
    <span> </span>
    <button onClick={() =>Dispatch("reset")}>reset</button>
  </div>
  <div>
      <div>countTwo={countTwo}</div>
      <button onClick={() =>DispatchTwo( "increment") }>increment</button>
      <span> </span>
      <button onClick={() =>DispatchTwo("decrement")}>decrement</button>
      <span> </span>
      <button onClick={() =>DispatchTwo("reset")}>reset</button>
    </div>
    </>
  );
}
