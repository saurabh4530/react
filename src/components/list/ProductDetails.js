
//@ts-nocheck
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Center from '../center/Center';


export default function ProductDetails() {
    const { id } = useParams(); 
    const [prodInfo ,setProdInfo]=useState({})
const  fetchData=async()=>{
    let prodInfo=await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProdInfo(prodInfo);
}
    useEffect(()=>{
       fetchData()
    },[id])


    return (<>
        <h1 className='text-center'>this is Component for Product Details- {id} </h1>
     
      <div className="card col-sm-3 offset-3" >
        <img src={prodInfo.image} className="card-img-top "  style={{height:"250px"}}  alt="...."/>
        <div className="card-body text-center">
          <h5 className="card-title">{prodInfo.category}</h5>
          <p className="card-text">{prodInfo.title}</p>
          <p className="card-text">Price:{prodInfo.price}</p>
          <p className="card-text">Rating:{prodInfo?.rating?.rate}</p>
          {/* {prodInfo.rating && (
            <>
              <p className="card-text">Rating: {prodInfo.rating.rate}</p>
              <p className="card-text">Count: {prodInfo.rating.count}</p>
            </>
          )} */}
         
        </div>
      </div> 
  </>
  )
}
 