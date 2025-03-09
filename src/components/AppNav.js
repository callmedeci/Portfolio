'use client';

import Link from 'next/link';

import { motion } from 'motion/react';

import Icon from '@/components/Icon';
import { useHashChange } from '@/hooks/useHashChange';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#intro', text: 'Intro' },
  { href: '#projects', text: 'Projects' },
  { href: '#about', text: 'About' },
  { href: '#contact', text: 'Contact' },
];

function AppNav() {
  const [hash, setHash] = useHashChange();

  return (
    <nav className='h-14 flex flex-1 justify-between items-center relative'>
      <Icon />

      <motion.ul className='hidden lg:flex gap-10 bg-zinc-800 rounded-2xl text-zinc-400 shadow-md p-1.5'>
        {links.map((link, index) => (
          <motion.li
            key={link.text}
            className={`${
              hash === link.href ? 'text-emerald-500' : ''
            } hover:text-emerald-500 transition-colors duration-300 font-semibold p-3 rounded-2xl w-20 flex justify-center relative`}
          >
            <Link
              className='z-30'
              onClick={() => setHash(`${link.href}`)}
              href={link.href}
            >
              {link.text}
            </Link>

            {hash === link.href && (
              <motion.span
                layoutId='highLigh'
                className='absolute inset-0 bg-zinc-900/80 rounded-2xl shadow-md shadow-zinc-900'
              ></motion.span>
            )}
          </motion.li>
        ))}
      </motion.ul>

      <div className='flex gap-1'>
        <MobileNav activeHash={hash} changeHash={setHash} links={links} />

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default AppNav;
