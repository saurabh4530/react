// @ts-nocheck
import React, { useRef } from 'react';

function RefDemo3() {
  const myRef1 = useRef();
  const myRef2 = useRef();

  const addition = () => {
    const num1 = +myRef1.current.value;
    const num2 = +myRef2.current.value;
    alert(`Addition of ${num1} & ${num2} is ${num1 + num2}`);
  };

  return (
    <>
      <div className='text-center'>RefDemo3 - Addition</div>
      <p>
        Number 1: <input ref={myRef1} /> 
      </p>
      <p>
        Number 2: <input ref={myRef2} /> 
      </p>
      <button onClick={addition}>Add</button>
    </>
  );
}

export default RefDemo3;
