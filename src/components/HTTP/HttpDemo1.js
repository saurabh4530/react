
import React, { useEffect, useState } from "react";

function HttpDemo1() {
  const [products, setProducts] = useState([]);
  const [errorMsg, seterrorMsg] = useState(null)

  const fetchProducts = async function () {
    try {
        const products = await fetch("https://fakestoreapi.com/products");
        // const products = await fetch("https://dummyjson.com/products");
        if (!products.ok) {
            throw new Error("network response not OK")
            
        }
        
        const finalData = await products.json();
        setProducts(finalData);//fake
        // setProducts(finalData.products);//dummy api
        console.log(finalData);
        console.log(finalData.products);
    } catch (error) {
        seterrorMsg(error.message)
    }
  };
  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <>
      <h1 className="text-center">Fetch Products </h1>
      { errorMsg ? (
<div className="alert alert-danger text-center" role="alert">
    {errorMsg}
</div>
      ):(

        
      
      <div className="container">
        <div className="row">
          {products.map((product, ind) => {
            return (
              <div className="col-sm-3  card" key={ind}>
                <img
                  src={product.image}//thumbnail for dummy api
                  className="card-img-top"
                  style={{ height: "250px" }}
                  alt="xyz"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.category}</h5>
               <p className="card-text">{product.title}</p>
               <p className="card-text">Price:{product.price}</p>
               <p className="card-text">Rating:{product.rating.rate}</p>
<button className="btn btn-primary"  >BUY NOW</button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}
    </>
  );
}

export default HttpDemo1;

