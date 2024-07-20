import React from 'react';

import { useEffect, useState } from 'react';

function Mycomponent() {
  debugger
  const [count, setCount] = useState(0);

  // ComponentDidMount
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  // ComponentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Component unmounted');
    };
  }, []);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Mycomponent;
