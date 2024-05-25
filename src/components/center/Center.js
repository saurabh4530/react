
import React from 'react';
import "./center.css"
import ExpressiomDemo from '../expressionDemo/ExpressiomDemo';
import ConditionalDemo1 from '../conditionalRendering/ConditionalDemo1';
import ConditionalCss from '../cssDemo/ConditionalCss';
import ConditionalDemo2 from '../conditionalRendering/ConditionalDemo2';
import ConditionalDemo3 from '../conditionalRendering/ConditionalDemo3';
import ConditionalDemo4 from '../conditionalRendering/ConditionalDemo4';
import ListDemo1 from '../list/ListDemo1';
import ListDemo2 from '../list/ListDemo2';
import ListDemo3 from '../list/ListDemo3';
import GreetDemo1 from '../greet/GreetDemo1';
import GreetDemo2 from '../greet/GreetDemo2';
import  ProductList from "../list/ProductList"

export default function Center() {
  return (<>
  
  <div className='center'> this is Center
    {/* <ExpressiomDemo/> */}
    {/* <ConditionalCss/> */}
     {/* <ConditionalDemo1/> */}
     {/* <ConditionalDemo2/> */}
     {/* <ConditionalDemo3/> */}
     {/* <ConditionalDemo4/> */}
     {/* <ListDemo1/> */}
     {/* <ListDemo2/> */}
     {/* <ListDemo3/> */}
     {/* <ProductList/> */}

      {/*//! props and state */}
     <GreetDemo1 name="saurabh" msg="hello friends...." age={45}/>
     {/* <GreetDemo2 name="saurabh k" msg="hello react...."/> */}

     </div>
  </>
  
  )
}
