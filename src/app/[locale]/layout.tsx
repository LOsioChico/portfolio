import type { Metadata } from 'next';
import '../../styles/globals.css';
import { NavBar } from '@/components/navBar';
import { notFound } from 'next/navigation';

const locales = ['en', 'de'];

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale} className='dark'>
      <body className='bg-white dark:bg-gray-800'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
