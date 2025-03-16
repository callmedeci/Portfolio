'use client';

import { format } from 'date-fns';
import { CalendarPlus, CalendarSync } from 'lucide-react';

import { motion } from 'motion/react';

function ProjectMain({ createdAt, updatedAt }) {
  return (
    <main className='mx-auto flex w-full max-w-5xl'>
      <div className='ml-2 flex w-full flex-1 justify-between gap-5'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.04, duration: 0.5 }}
          className='flex items-center gap-1 text-zinc-500 md:gap-2 dark:text-zinc-400'
        >
          <CalendarPlus className='size-5 md:size-6' />
          <span className='text-xs font-semibold md:text-sm'>Created at:</span>
          <time className='text-xs md:text-sm'>
            {format(new Date(createdAt), 'dd MMMM yyyy')}
          </time>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.04, duration: 0.5 }}
          className='flex items-center gap-1 text-zinc-500 md:gap-2 dark:text-zinc-400'
        >
          <CalendarSync className='size-5 md:size-6' />
          <span className='text-xs font-semibold md:text-sm'>Last update:</span>
          <time className='text-xs md:text-sm'>
            {format(new Date(updatedAt), 'dd MMMM yyyy')}
          </time>
        </motion.div>
      </div>
    </main>
  );
}

export default ProjectMain;
