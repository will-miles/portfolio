import React from 'react';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex border-b-2 border-alabaster'>
      <div className='flex-1 m-4'>
        <Link className='text-alabaster' to='/'>
          <span className=''>Will Miles</span>
          <span className='hidden sm:inline'> - Full-stack developer</span>
        </Link>
      </div>
      <Nav className='flex-1' />
    </div>
  );
};

export default Header;
