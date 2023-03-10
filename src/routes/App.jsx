import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';
import Missing from '../pages/Missing';
// import NavWrapper from './components/NavWrapper';

// const Profile = lazyLoad('../pages/Profile/Profile', 'Profile');
// const Dashboard = lazyLoad('../pages/Dashboard', 'Dashboard');

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../pages/Profile'));
const Login = lazy(() => import('../pages/Login'));

function App() {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route
          path="/"
          element={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <RequireAuth loginPath="/login">
              <Dashboard />
            </RequireAuth>
        }
        />
        <Route
          path="/profile"
          element={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <RequireAuth loginPath="/login">
              <Profile />
            </RequireAuth>
        }
        />
        <Route
          path="/dashboard"
          element={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <RequireAuth loginPath="/login">
              <Dashboard />
            </RequireAuth>
        }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
