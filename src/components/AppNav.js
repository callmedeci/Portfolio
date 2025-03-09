'use client';

import { Menu, Moon } from 'lucide-react';
import Link from 'next/link';
import Button from './Button';

import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import ThemeToggle from './ThemeToggle';

const AppLinks = [
  { href: '#intro', text: 'Intro' },
  { href: '#projects', text: 'Projects' },
  { href: '#about', text: 'About' },
  { href: '#contact', text: 'Contact' },
];

function AppNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState('#intro');

  useEffect(
    function () {
      setHash(window.location.hash);

      function handler() {
        console.log('ok');
        setHash(window.location.hash);
      }

      window.addEventListener('hashchange', handler);

      return () => window.removeEventListener('hashchange', handler);
    },
    [pathname]
  );

  return (
    <nav className='h-14 flex items-center gap-2 relative'>
      <ul className='hidden lg:flex gap-10 bg-zinc-800 px-6 py-2 rounded-2xl text-zinc-400 shadow-md'>
        {AppLinks.map((link) => (
          <li
            key={link.text}
            className={`${
              hash === link.href ? 'text-emerald-500' : ''
            } hover:text-emerald-500 transition-colors duration-300 font-semibold p-2 rounded-xl w-24 flex justify-center relative`}
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
                className='absolute inset-0 bg-zinc-900/80 rounded-2xl shadow-md'
              ></motion.span>
            )}
          </li>
        ))}
      </ul>

      <Modal>
        <Modal.Open id='mobileNav'>
          <Button variant='toggle' className='block lg:hidden'>
            <Menu />
          </Button>
        </Modal.Open>

        <Modal.Window id='mobileNav' className='m-10'>
          <h4 className='text-zinc-400 text-lg font-medium'>Navigation</h4>
          <motion.ul
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            className='divide-y divide-zinc-700 mt-5'
          >
            {AppLinks.map((link, i) => (
              <motion.li
                transition={{ delay: i * 0.002, duration: i * 0.2 }}
                initial={{ x: `${30 * i + 1}px` }}
                animate={{ x: '0px' }}
                key={link.text}
                className='py-2'
              >
                <Link
                  href={link.href}
                  onClick={() => setHash(`${link.href}`)}
                  className={`${
                    hash === link.href
                      ? 'text-emerald-500 font-semibold'
                      : 'text-zinc-500 font-normal'
                  } hover:text-emerald-300 transition-all duration-300`}
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </Modal.Window>
      </Modal>

      <ThemeToggle />
    </nav>
  );
}

export default AppNav;
