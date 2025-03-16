'use client';

import Badge from './ui/Badge';
import { motion } from 'motion/react';

function ProjectHeader({ name, description, topics }) {
  return (
    <motion.header className='mx-auto my-24 flex max-w-2xl flex-col items-center justify-center gap-6 text-center'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.04, duration: 0.5 }}
        className='text-center text-2xl font-bold text-zinc-800 md:text-5xl dark:text-zinc-100'
      >
        Welcome to <br />"{name.replaceAll('-', ' ')}"
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.04, duration: 0.5 }}
        className='tracking-wide text-zinc-600 dark:text-zinc-400'
      >
        {description}
      </motion.p>

      <ul className='flex flex-wrap justify-center gap-2'>
        {topics.map((topic, i) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.5 }}
            key={i}
          >
            <Badge>{topic}</Badge>
          </motion.li>
        ))}
      </ul>
    </motion.header>
  );
}

export default ProjectHeader;
