import Image, { type StaticImageData } from 'next/image';
import { CustomButton } from './customButton';
import type ITechnologies from '@/types/technologies';
import { Technologies } from './technologies';

interface ProjectProps {
  title: string;
  description: string;
  image: StaticImageData;
  technologies: ITechnologies[];
  deployLink: string;
  sourceLink?: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  deployLink,
  sourceLink,
}) => {
  return (
    <article className='group grid gap-4 sm:gap-7 md:grid-cols-2'>
      <a href={deployLink} target='_blank' rel='noreferrer' className='block'>
        <div className='relative flex overflow-hidden rounded-xl bg-indigo-100 dark:bg-gray-700/50'>
          <Image
            src={image}
            alt={title}
            className='translate-x-9 translate-y-9 rounded-lg transition-all duration-500 group-hover:translate-x-7 group-hover:translate-y-7'
          />
        </div>
      </a>
      <div className='flex flex-col justify-center gap-2.5'>
        <h3 className='text-3xl font-bold text-slate-800 dark:text-white'>
          {title}
        </h3>
        <p className='line-clamp-2 text-lg text-slate-600 dark:text-slate-300'>
          {description}
        </p>

        <Technologies technologies={technologies} />

        <div className='flex justify-start gap-3'>
          {sourceLink && (
            <CustomButton link={sourceLink} text='Code' icon={false} />
          )}
          <CustomButton link={deployLink} text='Live' icon />
        </div>
      </div>
    </article>
  );
};
