import React, { Component } from 'react';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';
import makeNavLinks from '../Utils.js';

class Header extends Component {
  state = { path: window.location.pathname, dropDownLinks: false };

  render() {
    return (
      <div className='border-b-2 border-alabaster'>
        <div className='flex'>
          <div className='flex-1 m-4'>
            <Link className='text-alabaster' to='/'>
              <span className=''>Will Miles</span>
              <span className='hidden sm:inline'> - Full-stack developer</span>
            </Link>
          </div>
          <Nav
            path={this.state.path}
            dropDownLinksHandler={this.dropDownLinksHandler}
            newPathHandler={this.newPathHandler}
            className='flex-1'
          />
        </div>
        <this.makeDropDown />
      </div>
    );
  }

  makeDropDown = () => {
    if (this.state.dropDownLinks) {
      return (
        <div className='flex justify-center sm:hidden'>
          {makeNavLinks(this.state.path, this.newPathHandler, 'm-auto')}
        </div>
      );
    } else {
      return (
        <div className='hidden'>
          {makeNavLinks(this.state.path, this.newPathHandler)}
        </div>
      );
    }
  };

  newPathHandler = (newPath) => {
    this.setState({ path: newPath, dropDownLinks: false });
  };

  dropDownLinksHandler = () => {
    if (this.state.dropDownLinks) {
      this.setState({ dropDownLinks: false });
    } else {
      this.setState({ dropDownLinks: true });
    }
  };
}

export default Header;
