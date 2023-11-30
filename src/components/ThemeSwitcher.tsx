import { useTheme } from 'next-themes';
import { FaMoon } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className='flex items-center gap-4 px-2 py-4 outline-none sm:py-5'
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme === 'dark' ? (
        <HiSun className='text-2xl text-white' />
      ) : (
        <FaMoon className='text-2xl text-slate-700' />
      )}
    </button>
  );
};
