import React, { useEffect, useState } from "react";

export default function LifecycleDemo5() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);
  useEffect(() => {
    console.log("useEffect called");

    return () => {
     console.log( "component will unmount......");
    };
  }, [a,b]);

  return (
    <>
      <div className="text-center">LifecycleDemo5 i.e useEffect()</div>
      <div>
        {a} {b} {c}
      </div>
      <button
        className="ms-1"
        onClick={() => {
          setA(15);
        }}
      >
        update A{" "}
      </button>
      <button
        className="ms-1"
        onClick={() => {
          setB(25);
        }}
      >
        update B{" "}
      </button>
      <button
        className="ms-1"
        onClick={() => {
          setC(35);
        }}
      >
        update C
      </button>
    </>
  );
}
