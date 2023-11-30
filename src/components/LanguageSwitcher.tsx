import { locales } from '@/types/locale';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { TbWorld } from 'react-icons/tb';

export const LanguageSwitcher = () => {
  const locale = useLocale();

  const currentLocaleIndex = locales.findIndex((l) => l === locale);
  const nextLocaleIndex =
    currentLocaleIndex + 1 === locales.length ? 0 : currentLocaleIndex + 1;

  return (
    <Link
      className='flex items-center justify-center gap-1 text-lg font-semibold text-gray-900 dark:text-gray-100'
      href={`/${locales[nextLocaleIndex]}`}
    >
      <TbWorld className='text-2xl text-gray-900 dark:text-white' />
      {locale.toUpperCase()}
    </Link>
  );
};
