'use client';

import { FaMoon } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <nav className='sticky top-0 z-10 mx-auto max-w-3xl'>
      <div className='-full static bottom-0 z-20 flex w-full items-center justify-end bg-white bg-opacity-80 px-5 py-1 backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-80'>
        <button className='flex items-center gap-4 px-2 py-4 outline-none sm:py-5'>
          <FaMoon className='text-2xl text-white' />
        </button>
      </div>
    </nav>
  );
};
