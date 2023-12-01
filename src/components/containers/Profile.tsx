import Image from 'next/image';
import { PiShootingStar } from 'react-icons/pi';
import { useTranslations, useLocale } from 'next-intl';

import ProfileImage from '@/assets/LOsioChico.jpg';
import { ToolTip } from '@/components/toolTip';
import { ProfileIntersection } from './ProfileIntersection';

export const Profile = () => {
  const t = useTranslations('profile');
  const locale = useLocale();

  return (
    <ProfileIntersection>
      <section className='flex flex-col items-center gap-5 sm:flex-row'>
        <div className='relative h-44 w-44 overflow-hidden rounded-full border-8 border-white bg-indigo-100 shadow-lg dark:border-gray-900/80 dark:bg-gray-700/60'>
          <Image src={ProfileImage} alt='Profile Picture' draggable='false' />
        </div>
        <div className='flex flex-col items-center gap-3 sm:items-start'>
          <div className='items-left flex flex-col gap-2'>
            <h1 className='text-center text-2xl font-bold text-slate-600 dark:text-slate-100 sm:text-left sm:text-4xl'>
              {t('author')}
            </h1>
            <p className='max-w-xl rounded-2xl text-sm text-slate-700 dark:text-slate-300 sm:text-lg'>
              {t('description')}
            </p>
          </div>
          <div className='flex gap-3'>
            <ToolTip
              tooltip={locale === 'es' ? 'Buscando Trabajo' : 'Looking For Job'}
            >
              <div className='grid place-items-center rounded-xl bg-emerald-200 p-2 dark:bg-emerald-500'>
                <PiShootingStar className='text-xl text-emerald-700 dark:text-white' />
              </div>
            </ToolTip>
            {/* <div className='flex items-center gap-3 rounded-lg bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-500 hover:bg-opacity-80 dark:bg-indigo-500 dark:text-indigo-100 hover:dark:bg-opacity-90'>
              <FaFileDownload className='text-indigo-500 dark:text-indigo-100' />
              Resume
            </div> */}
          </div>
        </div>
      </section>
    </ProfileIntersection>
  );
};
