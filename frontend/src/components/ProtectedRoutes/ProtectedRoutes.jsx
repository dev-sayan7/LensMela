import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if(!token){
    return <Navigate to='/login' replace />;
  }
  return children;
}

export default ProtectedRoutes