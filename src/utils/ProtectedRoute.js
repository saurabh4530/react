import React  from 'react'
import { Children } from 'react'
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({children}) {
    // const role =prompt("enter your role");
    const role="b"
    if (role==="student") {
        alert("you are not allowed to go this route")
        return <Navigate to="/Home" replace/>;
        
    }

  return (
    children
  )
}
