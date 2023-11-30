interface SocialButtonProps {
  color: string;
  link: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  color,
  link,
  icon,
  children,
}) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className={
        'flex h-16 items-center justify-center gap-3 rounded-xl px-4 font-bold ring-2 ring-[hsla(0,0%,0%,.06)] transition-shadow hover:ring-4 dark:ring-[hsla(0,0%,100%,.06)] ' +
        color
      }
    >
      {icon}
      {children}
    </a>
  );
};
