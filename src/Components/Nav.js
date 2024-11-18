import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className='hidden sm:flex text-center min-w-block'>
          {this.makeNavLinks()}
        </div>
        <div className='sm:hidden text-alabaster m-4'>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    );
  }

  makeNavLinks = () => {
    const NavArr = [
      { path: '/', text: 'Home' },
      { path: '/projects', text: 'Projects' },
      { path: '/contact', text: 'Contact' },
    ];

    return NavArr.map((navItem) =>
      this.props.path === navItem.path ? (
        <Link
          onClick={() => {
            this.props.handler(navItem.path);
          }}
          className='pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster m-3 mr-1.5 ml-1.5 opacity-70'
          key={navItem.text.toLowerCase()}
          to={navItem.path}
        >
          {navItem.text}
        </Link>
      ) : (
        <Link
          onClick={() => {
            this.props.handler(navItem.path);
          }}
          className='pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster m-3 mr-1.5 ml-1.5 hover:opacity-70'
          key={navItem.text.toLowerCase()}
          to={navItem.path}
        >
          {navItem.text}
        </Link>
      )
    );
  };
}

export default Nav;
