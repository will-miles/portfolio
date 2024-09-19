import React from 'react';
import Nav from './Nav.js';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-w-screen min-h-screen bg-gradient-to-br from-violet-900 to-violet-950 text-violet-400'>
      <div className='sm:flex'>
        <h1 className='p-3 sm:flex-1'>
          <Link to='/'>Will Miles - Full stack developer</Link>
        </h1>
        <Nav className='sm:flex-1' />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
