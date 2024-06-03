import React from "react";
import Center from "./components/center/Center";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Carousel from "./components/carousel/Carousel";
import { MyInterceptor1 } from "./interceptor/MyInterceptor1";
import { MyInterceptor2 } from "./interceptor/MyInterceptor2";
import { MyInterceptor3 } from "./interceptor/MyInterceptor3";
import { MyInterceptor4 } from "./interceptor/MyInterceptor4";
import { Routes,Route, Router } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";

import NotFound from "./components/notfound/NotFound"
import ProductList from "./components/list/ProductList"
import Careers from "./components/careers/Careers";
export default function App() {
  MyInterceptor1();
  MyInterceptor2();
  MyInterceptor3();
MyInterceptor4()
  return (
    <div>
      {/* <Header /> */}
       <Navbar />
      {/* <Categories /> */}
      {/* <Carousel />        */}

      
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Home" element={<Home/>}/>
        <Route  path="/AboutUs" element={<AboutUs/>}/>
        <Route  path="/Careers" element={<Careers/>}/>
        <Route  path="/ProductList" element={<ProductList/>}/>
        <Route path="*" element={<NotFound/>}/>


      </Routes>

      <Center />
      <Footer />
    </div>
  );
}
