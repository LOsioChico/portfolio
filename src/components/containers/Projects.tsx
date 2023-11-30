import { PiFolderSimpleStar } from 'react-icons/pi';
// import { Project } from '../project';

export const Projects = () => {
  return (
    <section className='w-full'>
      <header className='mb-6 flex items-center gap-3 text-2xl font-bold text-indigo-400 dark:text-gray-100'>
        <h2>Projects</h2>
        <PiFolderSimpleStar className='text-4xl' />
      </header>
      <div className='flex flex-col gap-10'>
        <div className='grid gap-10'>{/* Projects */}</div>
      </div>
    </section>
  );
};
