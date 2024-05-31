import React from 'react'

export default function EventDemo2() {
   let f1=()=>{
    console.log(f1);

    }
   let f2=()=>{
    console.log(f2);

    }
   let f3=()=>{
    console.log(f3);

    }
  return (<>
  <div className='border' onClickCapture={f1}  >div1
  <div className='border'onClickCapture={f2}>div2
  <div className='border' onClickCapture={f3}>div3
  
  </div>
  </div>
  </div>
  
  
  </>
  )
}
