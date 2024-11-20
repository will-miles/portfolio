import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import makeNavLinks from '../Utils.js';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className='hidden sm:flex text-center min-w-block'>
          {makeNavLinks(this.props.path, this.props.newPathHandler)}
        </div>
        <div
          onClick={() => {
            this.props.dropDownLinksHandler();
          }}
          className='sm:hidden text-alabaster m-4'
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    );
  }
}

export default Nav;
