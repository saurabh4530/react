// @ts-nocheck
import React, { useRef } from 'react';

function RefDemo4() {
  let myRef1 ;
  let myRef2 ;

  const addition = () => {
    const num1 = +myRef1.value;
    const num2 = +myRef2.value;
    alert(`Addition of ${num1} & ${num2} is ${num1 + num2}`);
  };

  return (
    <>
    <h3 className='text-center'>Addition using callback Ref</h3>
      <div className='text-center'>RefDemo3 - Addition</div>
      <p>
        Number 1: <input ref={(inputBox)=>{myRef1=inputBox}} /> 
      </p>
      <p>
        Number 2: <input ref={(inputBox)=>{myRef2=inputBox}} /> 
      </p>
      <button onClick={addition}>Add</button>
    </>
  );
}

export default RefDemo4;
