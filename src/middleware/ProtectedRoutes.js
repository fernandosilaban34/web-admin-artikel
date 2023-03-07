import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const useAuth = () => {
  const { user } = useContext();
  return user && user.LoggedIn;
};

function ProtectedRoutes() {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? <Dashboard /> : <Navigate to="/" state={{ from: location }} />;
}

export default ProtectedRoutes;
