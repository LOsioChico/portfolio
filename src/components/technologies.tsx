import type ITechnologies from '@/types/technologies';
import { ToolTip } from './toolTip';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandRedux } from 'react-icons/tb';

interface TechnologiesProps {
  technologies: ITechnologies[];
}

export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className='mb-1 flex items-center gap-2'>
      {technologies.map((technology) => (
        <ToolTip key={technology} tooltip={technology}>
          {technology === 'Next.js' && (
            <SiNextdotjs className='text-2xl text-white' />
          )}
          {technology === 'React' && (
            <FaReact className='text-2xl text-blue-400' />
          )}
          {technology === 'TypeScript' && (
            <BiLogoTypescript className='text-3xl text-blue-500' />
          )}
          {technology === 'TailwindCSS' && (
            <SiTailwindcss className='text-2xl text-teal-500' />
          )}
          {technology === 'JavaScript' && (
            <IoLogoJavascript className='text-2xl text-yellow-300' />
          )}
          {technology === 'Redux' && (
            <TbBrandRedux className='text-2xl text-purple-500' />
          )}
        </ToolTip>
      ))}
    </div>
  );
};
