import ProfileImage from '@/assets/LOsioChico.jpg';
import Image from 'next/image';

interface NavBarProfileProps {
  show: boolean;
}

export const NavBarProfile: React.FC<NavBarProfileProps> = ({ show }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 transition-all duration-300
      ${show ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
    >
      <div className='relative flex h-12 w-12 items-center overflow-hidden rounded-full  border-4 border-white bg-indigo-100 shadow-md dark:border-gray-900/80 dark:bg-gray-700/60'>
        <Image
          src={ProfileImage}
          alt='Profile Picture'
          draggable='false'
          className='rounded-full'
        />
      </div>
      <p className='ml-2 whitespace-nowrap text-lg font-semibold text-slate-600 dark:text-slate-300'>
        Luis Osio Chico
      </p>
    </div>
  );
};
