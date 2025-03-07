import { cn } from '@/lib/utils';

function Input({ name, placeholder, className }) {
  return (
    <input
      name={name}
      className={cn(
        'bg-inherit ring-2 ring-zinc-700/50 w-full rounded-md px-5 py-3 focus:outline-none focus:ring-emerald-500 transition-all shadow-md',
        className
      )}
      placeholder={placeholder}
    />
  );
}

export default Input;
