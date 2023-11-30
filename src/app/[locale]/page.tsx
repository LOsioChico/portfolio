import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('profile');
  console.log(t('description'));

  return (
    <main className='mx-auto mb-5 flex h-[500vh] max-w-3xl flex-col gap-16 px-5'>
      <section className='flex flex-col items-center gap-5 sm:flex-row'>
        <div className='relative h-44 w-44 overflow-hidden rounded-full border-8 border-white bg-indigo-100 shadow-lg dark:border-gray-900/80 dark:bg-gray-700/60'></div>
      </section>
    </main>
  );
}
