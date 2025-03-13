import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Avatar from './Avatar';

function Icon() {
  return (
    <div className='flex items-center gap-2 relative'>
      <Avatar>
        <Image src='/images/me.jpg' fill alt='Yunes picture' />
      </Avatar>

      <AnimatePresence>
        <motion.h2
          initial={{ opacity: 0, x: 50, visibility: 'hidden' }}
          animate={{ opacity: 1, x: 55, visibility: 'visible' }}
          className='text-sm sm:text-base xl:text-lg font-semibold text-zinc-800 dark:text-zinc-200 w-max tracking-tight absolute xl:translate-x-4 xl:tracking-normal'
        >
          Yunes Maghsoudie
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}

export default Icon;
