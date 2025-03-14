import { cn } from '@/lib/utils';
import { cloneElement } from 'react';

function Avatar({ children, className, ...props }) {
  return (
    <div
      className={cn(
        'relative size-12 scale-90 overflow-hidden rounded-full shadow-lg ring-2 shadow-zinc-400 ring-zinc-500 transition-all duration-300 hover:scale-95 xl:size-16 dark:shadow-zinc-900/50 dark:ring-zinc-700',
        className,
      )}
      {...props}
    >
      {cloneElement(children, { className: 'object-cover' })}
    </div>
  );
}

export default Avatar;
