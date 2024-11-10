import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  console.log(window.location.pathname);
  return (
    <div>
      <ul className='hidden sm:flex text-center min-w-block'>
        {makeNavLinks(window.location.pathname)}
      </ul>
      <div className='sm:hidden text-alabaster m-4'>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

const makeNavLinks = (pathname) => {
  const NavArr = [
    { path: '/', text: 'Home' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ];

  return NavArr.map((navItem) =>
    pathname === navItem.path ? (
      <Link key={navItem.text.toLowerCase()} to={navItem.path}>
        <li className='pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster m-3 mr-1.5 ml-1.5 opacity-70'>
          {navItem.text}
        </li>
      </Link>
    ) : (
      <Link key={navItem.text.toLowerCase()} to={navItem.path}>
        <li className='pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster m-3 mr-1.5 ml-1.5 hover:opacity-70'>
          {navItem.text}
        </li>
      </Link>
    )
  );
};

export default Nav;
