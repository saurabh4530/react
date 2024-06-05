import React from 'react';

const MyComponent = () => {
  // Simulate an error in the component
  throw new Error("Simulated error in MyComponent");

  return <div>This is MyComponent</div>;
};

export default MyComponent;
