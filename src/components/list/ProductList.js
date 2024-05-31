import React from "react";
import { productsData } from "./ProductsData";
import Product from "./Product";
import SearchBar from "react-js-search"

export default function ProductsData() {
  return (
    <>
   
      <div className="container">
        <div className="row m-3">
          <div className="col-sm-4 offset-3">
<input type="search" className="form-control" placeholder="search..."/>
          </div>
          <div className="col-sm-2 offset-3">
            <button className="btn btn-primary">Asc</button>
            <button className="btn btn-secondary ms-1">Desc</button>
        
          </div>
        </div>
        <div className="row " >
          {productsData.map((product, ind) => {
            return <Product prod={product} key={ind}/>
          })}
        </div>
      </div>
    </>
  );
}
