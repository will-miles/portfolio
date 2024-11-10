import React from 'react';
import { SocialsButtons } from '../Components/SocialsButtons';

const Contact = () => {
  return (
    <div className='text-center text-alabaster'>
      <h1 className='text-lg m-4'>Let's connect!</h1>
      <div className='animate-appear'>
        <div className='flex m-auto justify-center'>
          <p className='pr-3 pt-1 pl-3 pb-1 '>willmiles@live.co.uk</p>
          <button
            className='text-violet-800 pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster hover:opacity-40'
            onClick={() => (window.location = 'mailto:willmiles@live.co.uk')}
          >
            Start an email
          </button>
        </div>
        <SocialsButtons />
      </div>
    </div>
  );
};

export default Contact;
