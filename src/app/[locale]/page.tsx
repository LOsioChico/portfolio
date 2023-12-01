import { AnimatedContainer } from '@/components/containers/AnimatedContainer';
import { Experience } from '@/components/containers/Experience';
import { Profile } from '@/components/containers/Profile';
import { Projects } from '@/components/containers/Projects';
import { Socials } from '@/components/containers/Socials';

export default function Home() {
  return (
    <AnimatedContainer delay={300}>
      <Profile />
      <div />
      <Socials />
      <hr className='rounded-md border border-gray-300 dark:border-gray-600' />
      <Experience />
      <hr className='rounded-md border border-gray-300 dark:border-gray-600' />
      <Projects />
    </AnimatedContainer>
  );
}
