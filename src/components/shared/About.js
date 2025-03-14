'use client';

import { motion } from 'motion/react';

import HashProvider from '@/context/HashContext';
import AboutGrid from '../AboutGrid';

function About() {
  return (
    <HashProvider.Section>
      <div
        id='about'
        className='w-full flex flex-col border-t border-zinc-400 dark:border-zinc-700 my-26 py-26 min-h-160'
      >
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-2xl md:text-4xl text-zinc-800 dark:text-zinc-200 font-bold after:bg-emerald-500 after:content-[""] after:absolute after:w-26 after:h-0.5 after:left-0 after:bottom-0 relative'
        >
          About me
        </motion.h2>

        <AboutGrid />
      </div>
    </HashProvider.Section>
  );
}

export default About;
