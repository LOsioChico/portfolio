import { AnimatedContainer } from '@/components/containers/AnimatedContainer';
import { Experience } from '@/components/containers/Experience';
import { Profile } from '@/components/containers/Profile';
// import { Projects } from '@/components/containers/Projects';

export default function Home() {
  return (
    <AnimatedContainer>
      <Profile />
      <div />
      <hr className='rounded-md border border-gray-300 dark:border-gray-600' />
      <Experience />
      {/* <Projects /> */}
    </AnimatedContainer>
  );
}
