import React from 'react';
import { SocialsButtons } from '../Components/SocialsButtons';

const Contact = () => {
  return (
    <div className='text-center text-alabaster'>
      <h1 className='text-lg m-4'>Let's connect!</h1>
      <div className='animate-appear'>
        <div className='flex m-auto mt-8 mb-4 justify-center'>
          <p className='pr-3 pt-1 pl-3 pb-1 m-auto mr-2'>
            willmiles@live.co.uk
          </p>
          <button
            className='transition ease-in-out delay-50 text-violet-800 pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster hover:bg-violet-800 hover:text-alabaster hover:border-solid border-2 border-alabaster mr-auto'
            onClick={() => (window.location = 'mailto:willmiles@live.co.uk')}
          >
            <div className='hidden sm:inline'>Start an email</div>
            <div className='inline sm:hidden'>email</div>
          </button>
        </div>
        <SocialsButtons />
      </div>
    </div>
  );
};

export default Contact;
