// @ts-nocheck

import React, { PureComponent } from "react";
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
import ModelDemo1 from "../models/ModalDemo1";
import ModalDemo2 from "../models/ModalDemo2"
import EmployeeList from "../state/EmployeeList";
import EmployeeCRUD from "../employeeCURD/EmployeeCRUD"
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import PureCompDemo1 from "../misc/PureCompDemo1"
import PureCompDemo2 from "../misc/PureCompDemo2";
import MemoDemo1 from "../memo/MemoDemo1";
import MemoDemo2 from "../memo/MemoDemo2";
import LifecycleDemo1 from "../lifeCylceHooks/LifecycleDemo1";
import LifecycleDemo2 from "../lifeCylceHooks/LifecycleDemo2";
import LifecycleDemo3 from "../lifeCylceHooks/LifecycleDemo3";
import LifecycleDemo5 from "../lifeCylceHooks/LifecycleDemo5";
import RefDemo1 from "../ref/RefDemo1";
import RefDemo2 from "../ref/RefDemo2";
import RefDemo3 from "../ref/RefDemo3";
import RefDemo4 from "../ref/RefDemo4";
import FormDemo1 from "../form/FormDemo1";
import FormDemo2 from "../form/FormDemo2";
import FormDemo3 from "../form/FormDemo3";
import FormDemo4 from "../form/FormDemo4";
import FormDemo5 from "../form/FormDemo5";
import FormDemo6 from "../form/FormDemo6";
import HttpDemo1 from "../HTTP/HttpDemo1";
import HttpDemo2 from "../HTTP/HttpDemo2";
import HttpDemo3 from "../HTTP/HttpDemo3";
import HttpDemo4 from "../HTTP/HttpDemo4";





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
{/* <ModelDemo1/> */}
{/* <ModalDemo2/> */}

      {/*//! Search and Pagination  */}
{/* <EmployeeList/> */}
{/* <EmployeeCRUD/> */}

      {/*//! Events  */}

{/* <EventDemo1/> */}
{/* <EventDemo2/> */}

      {/*//! PureComponent  */}
{/* <PureCompDemo1/> */}
{/* <PureCompDemo2/> */}

      {/*//! MemoComponent  */}
      {/* <MemoDemo1/> */}

      {/*//! Lifecycle Hooks  */}
      {/* <LifecycleDemo1 name={"Prasad"}/> */}
      {/* <LifecycleDemo2/> */}
      {/* <LifecycleDemo3/> */}
      {/* <LifecycleDemo5/> */}
      {/* <RefDemo1/> */}
        {/* <RefDemo2/> */}
          {/* <RefDemo3/> */}
          {/* <RefDemo4/> */}

      {/*//! Form Validation   */}
        {/* <FormDemo1/> */}
        {/* <FormDemo2/> */}
        {/* <FormDemo3/> */}
        {/* <FormDemo4/> */}
        {/* <FormDemo5/> */}
{/* <FormDemo6/> */}

      {/*//! HTTP Methods   */}
      {/* <HttpDemo1/> */}
      <HttpDemo2/>
      {/* <HttpDemo3/> */}
      <HttpDemo4/> 


      </div>
    </>
  );
}
