'use client';
import { FaFileDownload } from 'react-icons/fa';

export const ResumeButton = ({ locale }: { locale: string }) => {
  const file = locale === 'es' ? 'CV__ES_.pdf' : 'CV.pdf';

  return (
    <a
      className='flex items-center gap-3 rounded-lg bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-500 hover:bg-opacity-80 dark:bg-indigo-500 dark:text-indigo-100 hover:dark:bg-opacity-90'
      href={`/${file}`}
      download
    >
      <FaFileDownload className='text-indigo-500 dark:text-indigo-100' />
      {/* Resume */}
      {locale === 'es' ? 'Currículum' : 'Resume'}
    </a>
  );
};
