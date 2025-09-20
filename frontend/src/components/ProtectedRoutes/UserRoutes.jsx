import React from 'react'
import { Navigate } from 'react-router-dom';

const UserRoutes = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user")).role;
  if(user == 'User'){
    return children;
    
  }
  return <Navigate to={'/403'} replace />;
}

export default UserRoutes