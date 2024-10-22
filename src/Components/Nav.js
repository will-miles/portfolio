import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className='sm:flex text-center min-w-screen'>{makeNavLinks()}</ul>
    </div>
  );
};

const makeNavLinks = () => {
  const NavArr = [
    { path: '/', text: 'Home' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ];

  return NavArr.map((navItem) => (
    <Link key={navItem.text.toLowerCase()} to={navItem.path}>
      <li className='pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster m-3 hover:opacity-40'>
        {navItem.text}
      </li>
    </Link>
  ));
};

export default Nav;
