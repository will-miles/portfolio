import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className='animate-appear mb-auto'>
      <div className='rounded-3xl rounded-b-none text-alabaster p-4 justify-center max-w-xl text-9xl m-auto'>
        <h1>Will</h1>
        <div className='flex'>
          {/* <h1 className='transposeY(50px) rotate-180 text-right'>W</h1> */}
          <h1>Miles</h1>
        </div>
      </div>
      <p className='rounded-2xl bg-alabaster p-4 text-justify max-w-xl m-auto'>
        A full-stack developer with over half a decade of industry experience.
        Driven to find elegant solutions to engineering opportunities at all
        ends of the tech stack.
      </p>
      <div className='flex p-4 max-w-sm mt-8 m-auto justify-center text-center'>
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
    </div>
  );
};

export default Home;
