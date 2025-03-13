import { cn } from '@/lib/utils';

function Button({ children, className, icon, variant = 'main', onClick }) {
  const mainStyle =
    'p-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 gap-2 flex items-center group';

  const style = {
    main: 'bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-400/50 dark:hover:bg-zinc-800/50 text-zinc-500 dark:text-zinc-300 hover:text-emerald-500 justify-center shadow-md',
    link: 'hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-emerald-500 hover:shadow-md justify-center text-emerald-400 text-sm xl:text-base',
    toggle:
      'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 rounded-full shadow-md',
    danger: 'text-zinc-700 dark:text-zinc-500 hover:text-rose-500',
  };

  return (
    <button
      onClick={onClick}
      className={cn(mainStyle, style[variant], className)}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default Button;
