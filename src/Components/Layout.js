import React from 'react';
import Nav from './Nav.js';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div class='min-w-screen min-h-screen bg-violet-950 text-violet-400'>
      <div class='sm:flex'>
        <h1 class='p-3 sm:flex-1'>
          <Link to='/'>Will Miles - Full stack developer</Link>
        </h1>
        <Nav class='sm:flex-1' />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
