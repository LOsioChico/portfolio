import { BsLink } from 'react-icons/bs';

interface CustomButtonProps {
  text: 'Live' | 'Code';
  link: string;
  icon?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  link,
  icon,
}) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className='group/live flex items-center gap-3 rounded-lg bg-slate-900 px-5 py-2 text-lg font-bold text-white transition-[gap] hover:gap-6 dark:bg-white dark:text-slate-900'
    >
      {text}
      {icon && (
        <BsLink className='text-2xl transition-transform group-hover/live:rotate-45' />
      )}
    </a>
  );
};
