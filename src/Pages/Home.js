import React from 'react';
import { SocialsButtons } from '../Components/SocialsButtons';

const Home = () => {
  return (
    <div className='animate-appear mb-auto'>
      <div className='rounded-3xl rounded-b-none text-alabaster p-4 justify-center max-w-xl text-9xl m-auto'>
        <h1>Will</h1>
        <div className='flex'>
          <h1>Miles</h1>
        </div>
      </div>
      <p className='rounded-2xl bg-alabaster p-4 text-justify max-w-xl m-auto'>
        A full-stack developer with over half a decade of industry experience.
        Driven to find elegant solutions to engineering opportunities at all
        ends of the tech stack.
      </p>
      <SocialsButtons />
    </div>
  );
};

export default Home;
