import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthRoute = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated) {
    // Redirect to dashboard if already authenticated
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthRoute;