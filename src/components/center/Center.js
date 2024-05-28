// @ts-nocheck

import React from "react";
import "./center.css";
import ExpressiomDemo from "../expressionDemo/ExpressiomDemo";
import ConditionalDemo1 from "../conditionalRendering/ConditionalDemo1";
import ConditionalCss from "../cssDemo/ConditionalCss";
import ConditionalDemo2 from "../conditionalRendering/ConditionalDemo2";
import ConditionalDemo3 from "../conditionalRendering/ConditionalDemo3";
import ConditionalDemo4 from "../conditionalRendering/ConditionalDemo4";
import ListDemo1 from "../list/ListDemo1";
import ListDemo2 from "../list/ListDemo2";
import ListDemo3 from "../list/ListDemo3";
import GreetDemo1 from "../greet/GreetDemo1";
import GreetDemo2 from "../greet/GreetDemo2";
import ProductList from "../list/ProductList";
import Welcome from "../props/Welcome";
import MyModal from "../props/MyModal";
import StateDemo1 from "../state/StateDemo1";
import StateDemo2 from "../state/StateDemo2";
import StateDemo3 from "../state/ShowHideDemo3";
import ShowHideDemo3 from "../state/ShowHideDemo3";
import TogglePassword1 from "../state/TogglePassword1";
import RemainingChar from "../state/RemainingChar";
import SweetAlertDemo1 from "../sweetAlert/SweetAlertDemo1";
import ModelDemo1 from "../models/ModelDemo1";

export default function Center() {
  let f1=function() {
    console.log("i am center component");
  };
  return (
    <>
      <div className="center">
        {" "}
        this is Center
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

        {/*//! props  */}
        {/* <GreetDemo1 name="saurabh" msg="hello friends...." age={25} cars="nano" f1={f1}/> */}
        {/* <GreetDemo2 name="saurabh k" msg="hello react...."/> */}
        {/* <Welcome>this is content from parent component
      <div>this is first div</div>
      <div>this is second div</div>
     </Welcome> */}
        {/* <MyModal heading="Registration Form">
          <>     
            {" "}
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div>this is your props.children concept</div>
          </>
        </MyModal> */}

      {/*//! states  */}
      {/* <StateDemo1/> */}
      {/* <StateDemo2/> */}
      {/* <ShowHideDemo3/> */}
      {/* <TogglePassword1/> */}
      {/* <RemainingChar/> */}

      {/*//! SweetAlert  */}

      {/* <SweetAlertDemo1/> */}

      {/*//! Models  */}
<ModelDemo1/>

      </div>
    </>
  );
}
