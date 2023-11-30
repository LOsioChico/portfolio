import { Experience } from '@/components/containers/Experience';
import { Profile } from '@/components/containers/Profile';
import { Projects } from '@/components/containers/Projects';

export default function Home() {
  return (
    <main className='mx-auto mb-5 flex h-[500vh] max-w-3xl flex-col gap-16 px-5'>
      <Profile />
      <hr className='rounded-md border border-gray-300 dark:border-gray-600' />
      <Experience />
      <Projects />
    </main>
  );
}
