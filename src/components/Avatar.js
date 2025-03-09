import { cn } from '@/lib/utils';
import { cloneElement } from 'react';

function Avatar({ children, className }) {
  return (
    <div
      className={cn(
        'size-12 xl:size-20 rounded-full overflow-hidden shadow-lg shadow-zinc-900/50 relative ring ring-zinc-700',
        className
      )}
    >
      {cloneElement(children, { className: 'object-cover' })}
    </div>
  );
}

export default Avatar;
