import React from 'react'

const ProtectedRoutes = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if(!token){
    return <Navigate path='/login' replace />;
  }
  return children;
}

export default ProtectedRoutes