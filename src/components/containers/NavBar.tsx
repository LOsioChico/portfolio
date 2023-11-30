'use client';

import { LanguageSwitcher } from '../LanguageSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const NavBar = () => {
  return (
    <nav className='sticky top-0 z-10 mx-auto max-w-3xl'>
      <div className='-full static bottom-0 z-20 flex w-full items-center justify-end gap-1 bg-white bg-opacity-80 px-5 py-1 backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-80'>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
