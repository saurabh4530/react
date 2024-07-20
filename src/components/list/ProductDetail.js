//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ProductDetail() { 
    const [searchParams]=useSearchParams();
    const [params,setParams]=useState({});
    useEffect(()=>{
        const allParams=Object.fromEntries([...searchParams])
        setParams(allParams)
    },[searchParams])

  return (

    <>
            <h1>This is an example of Query Params</h1>
            
                <div className="card col-sm-3 offset-3">
                    <img src={params.image} className="card-img-top" style={{ height: "250px" }} alt="" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{params?.category}</h5>
                        <p className="card-text">{params.title}</p>
                        <p className="card-text">Price: {params.price}</p>
                     
                    </div>
                </div>
            
        </>
    





  )
}
