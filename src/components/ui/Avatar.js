import { cn } from '@/lib/utils';
import { cloneElement } from 'react';

function Avatar({ children, className, ...props }) {
  return (
    <div
      className={cn(
        'size-12 xl:size-16 rounded-full overflow-hidden shadow-lg shadow-zinc-400 dark:shadow-zinc-900/50 relative ring ring-zinc-500 dark:ring-zinc-700',
        className
      )}
      {...props}
    >
      {cloneElement(children, { className: 'object-cover' })}
    </div>
  );
}

export default Avatar;
