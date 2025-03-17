'use client';

import { motion } from 'motion/react';

import HashProvider from '@/context/HashContext';
import AboutGrid from '../AboutGrid';

function About() {
  return (
    <HashProvider.Section>
      <div
        id='about'
        className='my-26 flex min-h-160 w-full flex-col border-t border-zinc-400 py-26 dark:border-zinc-700'
      >
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative text-2xl font-bold text-zinc-800 after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-26 after:bg-emerald-500 after:content-[""] md:text-4xl dark:text-zinc-200'
        >
          About me
        </motion.h2>

        <AboutGrid />
      </div>
    </HashProvider.Section>
  );
}

export default About;
