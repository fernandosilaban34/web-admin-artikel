import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function NavWrapper() {
  return (
    <>
      <nav className="flex gap-1">
        <NavLink to="Dashboard">Home</NavLink>
        <NavLink to="Profile">Profile</NavLink>
      </nav>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}
