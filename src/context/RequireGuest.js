import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';  

function RequireGuest({ children }) {
  const { currentUser } = useContext(AuthContext);

  // Si l'utilisateur est connecté, redirigez-le vers la page de profil
  if (currentUser) {
    return <Navigate to="/profil" replace />;
  }

  return children;
}

export default RequireGuest;
