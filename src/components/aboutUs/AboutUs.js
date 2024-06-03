import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AboutUs() {
  const navigate=useNavigate();
  const gotoProducts=()=>{
    alert(" do somethig")
    navigate("/ProductList")
  }
  return (<>
  <h1 className='text-center'>this is AboutUs Component</h1>
  <div className="text-center">
    <button className='btn btn-warning'  >
      <Link className='text-black' to="/ProductList">Go to Products</Link>
    </button>
    <br /><br />
    <button className='btn btn-primary' onClick={gotoProducts}>
Do Something and go to Products
    </button>

    <button className="btn btn-primary m-1" onClick={()=>{navigate(-1)}}> Go Back</button>

<button  className="btn btn-secondary" onClick={()=>{navigate(+1)}}> Go Next</button>

    
  </div>
  
  
  </>
  )
}
