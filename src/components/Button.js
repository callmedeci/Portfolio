import { cn } from '@/lib/utils';

function Button({ children, className, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-zinc-800 p-3 rounded-lg font-semibold cursor-pointer shadow-md hover:bg-zinc-800/50 transition-colors text-zinc-300 hover:text-emerald-500 flex items-center justify-center gap-2',
        className
      )}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default Button;
