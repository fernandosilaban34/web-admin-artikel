import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import { lazyLoad } from './hooks/lazyLoad';
import Login from './pages/Login';

const Profile = lazyLoad('../Profile', 'Profile');
const Dashboard = lazyLoad('../../pages/Dashboard', 'Dashboard');

function App() {
  return (
    <BrowserRouter>
      <NavWrapper />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
