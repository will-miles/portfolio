import React from 'react';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>
        <Link to='/'>William Miles - Full stack developer</Link>
      </h1>
      <Nav />
    </div>
  );
};

export default Header;
