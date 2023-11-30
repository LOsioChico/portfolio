import { PiFolderSimpleStar } from 'react-icons/pi';
import { Project } from '../project';
import { useTranslations } from 'next-intl';
import UVAImage from '@/assets/UVA.png';

export const Projects = () => {
  const t = useTranslations('projects');

  const UVATitle = t('UVA.title');
  const UVADescription = t('UVA.description');

  return (
    <section className='w-full'>
      <header className='mb-6 flex items-center gap-3 text-2xl font-bold text-indigo-400 dark:text-gray-100'>
        <h2>Projects</h2>
        <PiFolderSimpleStar className='text-4xl' />
      </header>
      <div className='flex flex-col gap-10'>
        <div className='grid gap-10'>
          <Project
            title={UVATitle}
            description={UVADescription}
            technologies={['React', 'JavaScript', 'TailwindCSS']}
            image={UVAImage}
            deployLink='https://uva.vercel.app'
            sourceLink='https://github.com/No-Country/c12-14-ft-node-react'
          />
        </div>
      </div>
    </section>
  );
};
