'use client';
import Image from 'next/image';

import { motion } from 'motion/react';

const techList = [
  {
    imageSrc: '/svg/javascript.svg',
    title: 'javascript',
    level: 'Expert',
  },
  {
    imageSrc: '/svg/tailwind.svg',
    title: 'tailwindcss',
    level: 'Expert',
  },
  {
    imageSrc: '/svg/react.svg',
    title: 'react developer',
    level: 'Mid',
  },
  {
    imageSrc: '/svg/nextjs.svg',
    title: 'nextJS developer',
    level: 'junior',
  },
];

function TechStack() {
  return (
    <motion.ul
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col md:grid md:grid-cols-2 gap-5 mt-5'
    >
      {techList.map((tech, i) => (
        <TechItem
          key={tech.title}
          imageSrc={tech.imageSrc}
          title={tech.title}
          level={tech.level}
          index={i}
        />
      ))}
    </motion.ul>
  );
}

function TechItem({ imageSrc, title, level, index }) {
  return (
    <motion.li
      viewport={{ once: true }}
      initial={{ opacity: 0, y: index * 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex gap-2 items-center w-full'
    >
      <div className='bg-zinc-200 dark:bg-zinc-800 p-2 w-max rounded-full overflow-hidden shadow-md'>
        <Image
          className='rounded-full'
          src={imageSrc}
          width={30}
          height={30}
          alt={title}
        />
      </div>
      <div className='flex flex-col text-sm font-semibold capitalize'>
        <span className='text-zinc-500 dark:text-zinc-300'>{title}</span>
        <span className='text-zinc-600 dark:text-zinc-400'>{level}</span>
      </div>
    </motion.li>
  );
}

export default TechStack;
