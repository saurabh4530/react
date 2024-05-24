import React from "react";
import { productsData } from "./ProductsData";



export default function ListDemo4() {


  return (
<>
<h1 className="text-center bg-primary text-white">product list</h1>
<div className="container">
    <div className="row">
      
   {
    productsData.map((product,ind)=>{
        
        return <div className="col-sm-3" key={ind}>
         <div className="card" >
        <img src={product.image} className="card-img-top" style={{height:"300px"}}  alt="...."/>
        <div className="card-body text-center">
          <h5 className="card-title">{product.category}</h5>
          <p className="card-text">{product.title}</p>
          <p className="card-text">Price:{product.price}</p>
          <p className="card-text">rating:{product.rating.rate}</p>
          <button className="btn btn-primary">BUY now</button>
        </div>
      </div> 
      </div>     
    })
   }
        </div>

    
</div>
</>
  )
}
