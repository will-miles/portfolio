import React, { Component } from 'react';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = { path: window.location.pathname };

  render() {
    return (
      <div className='flex border-b-2 border-alabaster'>
        <div className='flex-1 m-4'>
          <Link className='text-alabaster' to='/'>
            <span className=''>Will Miles</span>
            <span className='hidden sm:inline'> - Full-stack developer</span>
          </Link>
        </div>
        <Nav path={this.state.path} handler={this.handler} className='flex-1' />
      </div>
    );
  }

  handler = (newPath) => {
    this.setState({ path: newPath });
    this.forceUpdate();
  };
}

export default Header;
