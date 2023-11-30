'use client';

import { FaMoon } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { useLocale } from 'next-intl';
import { locales } from '@/types/locale';
import Link from 'next/link';

export const NavBar = () => {
  const locale = useLocale();

  const currentLocaleIndex = locales.findIndex((l) => l === locale);
  const nextLocaleIndex =
    currentLocaleIndex + 1 === locales.length ? 0 : currentLocaleIndex + 1;

  return (
    <nav className='sticky top-0 z-10 mx-auto max-w-3xl'>
      <div className='-full static bottom-0 z-20 flex w-full items-center justify-end bg-white bg-opacity-80 px-5 py-1 backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-80'>
        <button className='flex items-center gap-4 px-2 py-4 outline-none sm:py-5'>
          <Link
            className='flex items-center justify-center gap-1 text-lg font-semibold text-gray-900 dark:text-gray-100'
            href={`/${locales[nextLocaleIndex]}`}
          >
            <TbWorld className='text-2xl text-white' />
            {locale.toUpperCase()}
          </Link>
          <FaMoon className='text-2xl text-white' />
        </button>
      </div>
    </nav>
  );
};
