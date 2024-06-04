import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

export default function Careers() {
  const navigate = useNavigate();
  // debugger;
  return (
    <>
      <h1 className="text-center">this is Careers Components</h1>
      <div className="text-center">
        <br />
        <br />
        <br />
        <br />
        <br />
        <>
          <h1 className="text-center">
            this is Careers Components and example of nested routing
          </h1>
          <h1 className="text-center">
            this is Careers Components ad common for both ParmenentJob and
            ContractJob
          </h1>
          <Link to="/Careers/ParmenentJob">ParmenentJob</Link>
          <br />

          <Link to="/Careers/ContractJob">ContractJob</Link>
        </>
        <Outlet />
      </div>
    </>
  );
}
