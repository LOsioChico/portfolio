'use client';

import { useTheme } from 'next-themes';
import { FaMoon } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      className='flex items-center gap-4 px-2 py-4 outline-none sm:py-5'
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {mounted ? (
        <span className='flex items-center justify-center gap-1 text-lg font-medium text-gray-900 dark:text-gray-100'>
          {theme === 'dark' ? (
            <HiSun className='text-2xl text-white' />
          ) : (
            <FaMoon className='text-2xl text-slate-700' />
          )}
        </span>
      ) : (
        <div className='h-6 w-6 animate-pulse rounded-full bg-gray-200' />
      )}
    </button>
  );
};
