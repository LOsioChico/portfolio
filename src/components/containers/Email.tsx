import { MdOutlineEmail } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';
import { ToolTip } from '../toolTip';
import { useTranslations } from 'next-intl';
import { CopyEmailButton } from '../CopyEmailButton';

export const Email = () => {
  const email = 'osiochico@gmail.com';
  const t = useTranslations('email');

  return (
    <section className='w-full'>
      <header className='mb-6 flex items-center gap-3 text-2xl font-bold text-indigo-400 dark:text-gray-100'>
        <h2>Email</h2>
        <MdOutlineEmail className='text-3xl' />
      </header>
      <div className='flex gap-2'>
        <input
          type='text'
          disabled
          className='grid w-full place-items-center rounded-lg bg-black/5 px-3 py-1.5 text-slate-600 dark:bg-white/5 dark:text-slate-300'
          value={email}
        />
        <div className='flex gap-2'>
          <ToolTip tooltip={t('send')}>
            <a
              href={`mailto:${email}`}
              target='_blank'
              rel='noreferrer'
              className='flex rounded-lg bg-indigo-100 px-3 py-2 text-indigo-500 hover:bg-opacity-80 dark:bg-indigo-500 dark:text-indigo-100 hover:dark:bg-opacity-90'
            >
              <IoMdSend className='text-2xl' />
            </a>
          </ToolTip>
          <CopyEmailButton text={t('copy')} email={email} />
        </div>
      </div>
    </section>
  );
};
