'use client';
import { motion } from 'motion/react';
import AboutGrid from '../AboutGrid';

function About() {
  return (
    <section
      id='about'
      className='w-full flex flex-col mt-4 py-24 border-t border-zinc-700'
    >
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-2xl md:text-4xl text-zinc-200 font-bold after:bg-emerald-500 after:content-[""] after:absolute after:w-26 after:h-0.5 after:left-0 after:bottom-0 relative'
      >
        About me
      </motion.h2>
      <AboutGrid />
    </section>
  );
}

export default About;
