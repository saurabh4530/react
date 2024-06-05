import React, { Suspense } from "react";
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
import { Routes, Route, Router } from "react-router-dom";
// import Home from "./components/home/Home";
// import AboutUs from "./components/aboutUs/AboutUs";

import NotFound from "./components/notfound/NotFound";
import ProductList from "./components/list/ProductList";
// import Careers from "./components/careers/Careers";
import ProductDetails from "./components/list/ProductDetails";
import ProductDetail from "./components/list/ProductDetail";
import ParmenentJob from "./components/careers/ParmenentJob";
import ContractJob from "./components/careers/ContractJob";
import ProtectedRoute from "./utils/ProtectedRoute";
import ErrorBoundaries from "./components/errorboundaries/ErrorBoundaries";
import Mycomponent from "./components/errorboundaries/Mycomponent";





const LazyHome = React.lazy(() => import("./components/home/Home"));
const LazyAboutUS = React.lazy(() => import("./components/aboutUs/AboutUs"));
const LazyCareer = React.lazy(() => import("./components/careers/Careers"));

export default function App() {
  MyInterceptor1();
  MyInterceptor2();
  MyInterceptor3();
  MyInterceptor4();
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* <Categories /> */}
      {/* <Carousel />        */}

      <Suspense fallback={<div>Loading............!</div>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/Home" element={<LazyHome />} />
          <Route path="/AboutUs" element={<LazyAboutUS />} />
          <Route
            path="/Careers"
            element={
              <Suspense fallback={<h3>Loading..........!</h3>}>
                <LazyCareer />
              </Suspense>
            }
          >
            <Route index element={<ParmenentJob />} />
            <Route path="/Careers/ParmenentJob" element={<ParmenentJob />} />
            <Route path="/Careers/ContractJob" element={<ContractJob />} />
          </Route>
          <Route
            path="/ProductList"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />{" "}
          {/* {remember to give id while using paraams} */}
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
     

      <Center />



            {/*//! Error Boundaries  */}
            {/* <ErrorBoundaries>
        <Mycomponent/>
      </ErrorBoundaries> */}


      <Footer />
    </div>
  );
}
