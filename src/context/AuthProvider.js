import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const foo = useMemo(() => ({ auth, setAuth }), [auth]);
  return (
    <AuthContext.Provider value={foo}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
};

AuthProvider.defaultProps = {
  children: 'error Auth',
};

export default AuthContext;
