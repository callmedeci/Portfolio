'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';
import Avatar from './Avatar';

function Icon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex items-center gap-2 relative'>
      <Avatar
        onClick={() => setIsOpen(!isOpen)}
        className='hover:shadow-zinc-950 transition-shadow duration-300 cursor-pointer'
      >
        <Image src='/images/me.jpg' fill alt='Yunes picture' />
      </Avatar>

      <AnimatePresence>
        {isOpen && (
          <motion.h2
            initial={{ opacity: 0, x: 50, visibility: 'hidden' }}
            animate={{ opacity: 1, x: 55, visibility: 'visible' }}
            exit={{ opacity: 0, x: 50, visibility: 'hidden' }}
            className='text-base xl:text-lg font-semibold text-zinc-200 absolute w-max xl:translate-x-4 tracking-tight'
          >
            {'Yunes Maghsoudie'.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Icon;
