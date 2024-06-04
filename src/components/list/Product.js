import React from 'react'
import { Link, createSearchParams, useNavigate } from 'react-router-dom';

export default function Product(props) {
  //props destructuring...
const {image,category,title,price,rating,id}=props.prod;
const  navigate=useNavigate()
const navigateHandler=(title,price)=>{
  navigate({
    pathname:"/ProductDetail",
    search:`?${createSearchParams({
      title,price,category
    })}`,  
  })
     
  }



  return (
    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3" >
         <div className="card" >
        <img src={image} className="card-img-top" style={{height:"300px"}}  alt="...."/>
        <div className="card-body text-center">
          <h5 className="card-title">{category}</h5>
          <p className="card-text">{title}</p>
          <p className="card-text">Price:{price}</p>
          <p className="card-text">rating:{rating.rate}</p>
      
          <button className='btn btn-primary'>
          <Link className='text-black'  to={`/ProductDetails/${id}`}>View </Link>
          </button>
       
          <button className='btn btn-warning' onClick={()=>{
            navigateHandler(title,price)
          }}>
            view-2
          </button>
        </div>
      </div> 
      </div>    
  )
}
