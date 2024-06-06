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
export default function UseReducerOne() {
  const [count, Dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count={count}</div>
      <button
        onClick={() =>
          Dispatch(
            // @ts-ignore
            "increment"
          )
        }
      >
        increment
      </button>
      <span> </span>
      <button
        onClick={() =>
          Dispatch(
            // @ts-ignore
            "decrement"
          )
        }
      >
        decrement
      </button>
      <span> </span>
      <button
        onClick={() =>
          Dispatch(
            // @ts-ignore
            "reset"
          )
        }
      >
        reset
      </button>
    </div>
  );
}
