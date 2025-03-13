'use client';

import Link from 'next/link';

import { motion } from 'motion/react';

import { useHash } from '@/context/HashContext';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';
import Icon from './ui/Icon';

const links = [
  { href: 'intro', text: 'Intro' },
  { href: 'projects', text: 'Projects' },
  { href: 'about', text: 'About' },
  { href: 'contact', text: 'Contact' },
];

function AppNav() {
  const { hash } = useHash();

  return (
    <nav className='h-14 flex flex-1 justify-between items-center relative'>
      <Icon />

      <motion.ul className='hidden lg:flex gap-10 bg-zinc-300 dark:bg-zinc-800 rounded-2xl text-zinc-800 dark:text-zinc-400 shadow-md p-1.5 fixed lg:left-1/3 xl:left-2/5 z-50 ring ring-zinc-200 dark:ring-zinc-900'>
        {links.map((link, i) => (
          <motion.li
            initial={{ y: (i + 1) * 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            key={link.text}
            className={`${
              hash === link.href ? 'text-emerald-500' : ''
            } hover:text-emerald-500 transition-colors duration-300 font-semibold p-3 rounded-2xl w-20 flex justify-center relative`}
          >
            <Link className='z-30' href={`#${link.href}`}>
              {link.text}
            </Link>

            {hash === link.href && (
              <motion.span
                layout
                layoutId='highLigh'
                className='absolute inset-0 bg-zinc-200/80 dark:bg-zinc-900/80 rounded-2xl shadow-md shadow-zinc-400 dark:shadow-zinc-900'
              ></motion.span>
            )}
          </motion.li>
        ))}
      </motion.ul>

      <div className='flex items-center gap-1 fixed lg:relative right-5 z-10'>
        <MobileNav activeHash={hash} links={links} />

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default AppNav;
