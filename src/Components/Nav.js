import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className='flex text-center sm:justify-center'>{makeNavLinks()}</ul>
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
      <li className='p-2 rounded-full bg-alabaster flex-auto m-3 hover:opacity-40'>
        {navItem.text}
      </li>
    </Link>
  ));
};

export default Nav;
