import type { Metadata } from 'next';
import '../../styles/globals.css';
import { NavBar } from '@/components/containers/NavBar';
import { notFound } from 'next/navigation';
import { locales } from '@/types/locale';
import { Providers } from '@/providers/Providers';

export const metadata: Metadata = {
  title: 'LOsioChico Portfolio',
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
    <html lang={locale} suppressHydrationWarning>
      <body className='bg-white dark:bg-gray-800'>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
