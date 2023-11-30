import { LuAtSign } from 'react-icons/lu';
import { SocialButton } from '../SocialButton';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export const Socials = () => {
  return (
    <section className='w-full'>
      <header className='mb-6 flex items-center gap-3 text-2xl font-bold text-indigo-400 dark:text-gray-100'>
        <h2>Socials</h2>
        <LuAtSign className='text-3xl' />
      </header>
      <div className='flex flex-wrap gap-3'>
        <SocialButton
          color='text-sky-600'
          link='https://www.linkedin.com/in/losiochico/'
          icon={<BsLinkedin className='text-2xl' />}
        >
          Linkedin
        </SocialButton>
        <SocialButton
          color='dark:text-white text-gray-800'
          link='https://github.com/LOsioChico'
          icon={<FaGithub className='text-2xl' />}
        >
          Github
        </SocialButton>
      </div>
    </section>
  );
};
