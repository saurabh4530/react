//@ts-nocheck
import React  from 'react'
import { Children } from 'react'
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({children}) {
  

    // const role =prompt("enter your role");
    const age=+prompt("enter the age ");
    if ( age===Number && age<18) {
        alert("you are not allowed to go this route")

        // return <Navigate to="/Home" replace={true}/>;
        
    }

  return (
    children
  )
}
