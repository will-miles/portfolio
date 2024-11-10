import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const SocialsButtons = () => {
  return (
    <div className='flex p-4 max-w-sm m-auto justify-center text-center text-violet-800'>
      <a
        className='rounded-full bg-alabaster p-4 m-auto mr-4 hover:bg-alabaster_hover'
        href='https://github.com/will-miles'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faGithub} size='2xl' />
      </a>
      <a
        className='rounded-full bg-alabaster p-4 m-auto ml-4 hover:bg-alabaster_hover'
        href='https://www.linkedin.com/in/will-miles/'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faLinkedin} size='2xl' />
      </a>
    </div>
  );
};
