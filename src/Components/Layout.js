import React from 'react';
import Nav from './Nav.js';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-w-screen min-h-screen bg-gradient-to-br from-violet-900 to-violet-950 text-violet-800'>
      <div className='sm:flex border-b-2 border-alabaster'>
        <h1 className='p-4 sm:flex-1 m-auto'>
          <Link className='text-alabaster' to='/'>
            Will Miles - Full stack developer
          </Link>
        </h1>
        <Nav className='sm:flex-1' />
      </div>
      <div className='mb-auto'>
        <Outlet />
      </div>
      <p className='bottom-0'>Copyright Will Miles 2024</p>
    </div>
  );
};

export default Layout;
