interface TooltipProps {
  children: React.ReactNode;
  tooltip: string;
}

export const ToolTip: React.FC<TooltipProps> = ({ children, tooltip }) => {
  return (
    <div className='group/tooltip relative'>
      {children}
      <span className="before:dark:gray-800 pointer-events-none absolute bottom-full left-1/2 z-20 -translate-x-1/2 -translate-y-0 whitespace-nowrap rounded-md bg-gray-800 px-1.5 py-1 text-xs text-gray-200 opacity-0 transition-all before:absolute before:-bottom-1 before:left-1/2 before:-z-10 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rotate-45 before:rounded-sm before:bg-gray-800 before:content-[''] group-hover/tooltip:-translate-y-3 group-hover/tooltip:opacity-100 dark:bg-white dark:text-gray-700 before:dark:bg-white">
        {tooltip}
      </span>
    </div>
  );
};
