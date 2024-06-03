import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Careers() {
  const navigate=useNavigate()
  // debugger;
  return (<>
  <h1 className='text-center'>this is Careers Components</h1>
  <div className='text-center'>

  <button className="btn btn-primary m-1" onClick={()=>{navigate(-1)}}> Go Back</button>

  <button  className="btn btn-secondary" onClick={()=>{navigate(+1)}}> Go Next</button>
  </div>
  </>
  )
}
