'use client';

import { LanguageSwitcher } from '../LanguageSwitcher';
import { useShowProfileOnNavbarStore } from '@/stores/useShowProfileOnNavbarStore';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { NavBarProfile } from '../NavBarProfile';

export const NavBar = () => {
  const showProfileOnNavbar = useShowProfileOnNavbarStore(
    (state) => state.showProfileOnNavbar,
  );

  return (
    <nav className='sticky top-0 z-10 mx-auto max-w-3xl'>
      <div className='-full static bottom-0 z-20 flex w-full items-center justify-between bg-white bg-opacity-80 px-5 py-1 backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-80'>
        <NavBarProfile show={showProfileOnNavbar} />
        <div className='flex gap-1'>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
