import React from "react";
import { productsData } from "./ProductsData";
import Product from "./Product";

export default function ProductsData() {
  return (
    <>
      <h1 className="text-center bg-primary text-white">product list</h1>
      <div className="container">
        <div className="row">
          {productsData.map((product, ind) => {
            return <Product prod={product} key={ind}/>
          })}
        </div>
      </div>
    </>
  );
}
