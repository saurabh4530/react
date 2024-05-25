import React from "react";
import "./categories.css";
import categories from "../categories/categories.json"
import  Category from "../categories/Category.js"

export default function Categories() {
  return (
    <div className="container">
      <div className="row">
        {
            categories.map((category,ind)=>{
                return <div className="col" key={ind}>
                    <Category category={category}/>
                </div>
            })
        }
      
      </div> 
    </div>
  );
}
