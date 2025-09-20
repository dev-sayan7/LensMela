import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if(!user){
    return <Navigate to='/login' replace />;
  }
  return children;
}

export default ProtectedRoutes