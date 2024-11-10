import React from 'react';
import Header from './Header.js';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Layout = () => {
  return (
    <div className='flex flex-col min-w-screen min-h-screen bg-cover bg-gradient-to-br from-violet-900 to-violet-950 text-violet-800 bg-'>
      <Header />
      <div className='mb-auto flex-grow'>
        <Outlet />
      </div>
      <p className='m-auto w-full bottom-0 text-alabaster text-center'>
        <FontAwesomeIcon icon={faCopyright} /> Will Miles 2024
      </p>
    </div>
  );
};

export default Layout;
