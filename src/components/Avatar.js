import { cn } from '@/lib/utils';
import { cloneElement } from 'react';

function Avatar({ children, className }) {
  return (
    <div
      className={cn(
        'size-20 xl:size-24 rounded-full overflow-hidden shadow-lg relative ring ring-zinc-700',
        className
      )}
    >
      {cloneElement(children, { className: 'object-cover' })}
    </div>
  );
}

export default Avatar;
