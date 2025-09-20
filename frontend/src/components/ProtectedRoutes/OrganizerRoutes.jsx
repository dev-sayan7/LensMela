import React from 'react'
import { Navigate } from 'react-router-dom';

const OrganizerRoutes = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user")).role;
  if(user == 'Organizer'){
    return children;
    
  }
  return <Navigate to={'/403'} replace />;
}

export default OrganizerRoutes