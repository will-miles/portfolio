import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul class='flex text-center sm:justify-center'>{makeNavLinks()}</ul>
    </div>
  );
};

const makeNavLinks = () => {
  const linksArr = [
    { path: '/', text: 'Home' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ];

  return linksArr.map((e) => (
    <Link to={e.path}>
      <li class='p-2 rounded-full bg-violet-900 flex-auto m-3 hover:opacity-40'>
        {e.text}
      </li>
    </Link>
  ));
};

export default Nav;
