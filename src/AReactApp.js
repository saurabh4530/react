
import "./App.css"
import React, { useState } from "react";
import Jsxbasic from "./A_React/basicJSX/Jsxbasic.jsx";

import Counter from "./A_React/components/basic-components/Counter.js";
import J1basics from "./A_React/basicJSX/J1basics.js";
import MyClassComp from "./A_React/basicJSX/MyClassComp.js";
import Events from "./A_React/components/basic-components/Events.js";
import Book from "./A_React/components/class-comp/Book.js";
import Library from "./A_React/components/class-comp/Library.js";
import ColorCycle from "./A_React/components/class-comp/ColorCycle.js";
import CSSModulesComponent from "./A_React/css/CSSModulesComponent.js";
import CSSStylesheetComponent from "./A_React/css/CSSStylesheetComponent.js";
import InlineStylingComponent from "./A_React/css/InlineStylingComponent.js";
import ObjUseState from "./A_React/hooks/useState/ObjUseState.js";
import ArrayUseState from "./A_React/hooks/useState/ArrayUseState.js";
import UseEffectOne from "./A_React/hooks/useEffect/UseEffectOne.js";
import UseEffectTwo from "./A_React/hooks/useEffect/UseEffectTwo.js";
import UseEffectThree from "./A_React/hooks/useEffect/UseEffectThree.js";
import UseEffectFour from "./A_React/hooks/useEffect/UseEffectFour.js";
import UseEffectFive from "./A_React/hooks/useEffect/UseEffectFive.js";
import UseEffectFetchData1 from "./A_React/hooks/useEffect/UseEffectFetchData1.js";
import UseEffectFetchData2 from "./A_React/hooks/useEffect/UseEffectFetchData2.js";
import UseReducerOne from "./A_React/hooks/useReducer/UseReducerOne.js";
import UseReducerTwo from "./A_React/hooks/useReducer/UseReducerTwo.js";
import UseReducerThree from "./A_React/hooks/useReducer/UseReducerThree.js";
import ComponentC from "./A_React/hooks/useContext/ComponentC.js";
import Parent1 from "./A_React/hooks/childToParentDataPass/Parent1.js";
import DataFetch from "./A_React/hooks/useReducer/DataFetch.js";
import DataFetchTwo from "./A_React/hooks/useReducer/DataFetchTwo.js";
import Default from "./A_React/basicJSX/DefaultApp.js"


export const UserContext= React.createContext();
export const ChannelContext= React.createContext();
// Define a functional component called App
 function AReactApp() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        {/* First Default React component */}
        {/* <Default/> */}

        {/* Counter using useState */}
        {/* <Counter /> */}

        {/* JSX first file */}
        {/* <J1basics/> */}

        {/* JSX */}
        {/* <Jsxbasic/> */}

        {/* Class based component */}
        {/* <MyClassComp props={{name: "Shubham"}}/> */}

        {/* React Events */}
        {/* <Events/> */}

        {/* Class based component in detail */}
        {/* <Book /> */}
        {/* <Library/> */}

        {/* React life cycle methods in class based components */}
        {/* <ColorCycle initialColor="blue"/> */}

        {/* <InlineStylingComponent/> */}
        {/* <CSSModulesComponent/> */}
        {/* <CSSStylesheetComponent/> */}

        {/* <ObjUseState/> */}
        {/* <br /> */}
        {/* <ArrayUseState/> */}
        {/* <UseEffectOne/> */}
        {/* <UseEffectTwo/> */}
        {/* <UseEffectThree/> */}
        {/* <UseEffectFour/> */}
        {/* <UseEffectFive/> */}
        {/* <UseEffectFetchData1/> */}
        {/* <UseEffectFetchData2/> */}

        {/* <UseReducerOne/> */}
        {/* <UseReducerTwo/> */}
        {/* <UseReducerThree/> */}


         {/* {UseContext details} */}
         {/* <UserContext.Provider value={"saurabh"}>
<ChannelContext.Provider value={"kakade"}>

          <ComponentC/>

</ChannelContext.Provider>

         </UserContext.Provider> */}

{/* {UseContext and useReducer combine details} */}
  {/* <Parent1/> */}

  {/* data fetchig with useReducer */}
  {/* <DataFetch/> */}
  {/* <DataFetchTwo/> */}

      </header>

    </div>
  </div>
);
}
export default AReactApp