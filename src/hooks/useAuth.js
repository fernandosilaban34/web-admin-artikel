import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/AuthProvider';

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (authda) => (authda?.user ? 'Logged In' : 'Logged Out'));
  return useContext(AuthContext);
};

export default useAuth;
