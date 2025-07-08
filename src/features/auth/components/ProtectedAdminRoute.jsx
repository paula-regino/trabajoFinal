import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedAdminRoute = ({ children }) => {
  // Usar Redux o localStorage para obtener el usuario
  const reduxUser = useSelector((state) => state.auth.user);
  const user = reduxUser || JSON.parse(localStorage.getItem('currentUser') || '{}');
  if (!user || !user.isAdmin) {
    return <Navigate to='/login' />;
  }
  return children;
};
