import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

function Input({ name, placeholder, className, ...props }) {
  return (
    <motion.input
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      name={name}
      className={cn(
        'bg-inherit ring-2 ring-zinc-700/50 w-full rounded-md px-5 py-3 focus:outline-none focus:ring-emerald-500 transition-all shadow-md',
        className
      )}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;
