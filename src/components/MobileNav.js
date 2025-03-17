'use client';

import { useHash } from '@/context/HashContext';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Button from './ui/Button';
import Modal, { useModalContext } from './ui/Modal';

function MobileNav({ links }) {
  return (
    <Modal>
      <Modal.Open id='mobileNav'>
        <Button
          variant='toggle'
          className='block shadow-zinc-400 md:hidden dark:shadow-zinc-950'
        >
          <Menu className='size-5 md:size-7' />
        </Button>
      </Modal.Open>

      <Modal.Window id='mobileNav' className='m-10'>
        <h4 className='text-lg font-medium text-zinc-700 dark:text-zinc-400'>
          Navigation
        </h4>
        <motion.ul
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          className='mt-5 divide-y divide-zinc-300 dark:divide-zinc-700'
        >
          <MobileItem links={links} />
        </motion.ul>
      </Modal.Window>
    </Modal>
  );
}

function MobileItem({ links, activeHash }) {
  const { hash } = useHash();
  const { close } = useModalContext();

  return links.map((link, i) => (
    <motion.li
      onClick={close}
      transition={{ delay: i * 0.002, duration: i * 0.2 }}
      initial={{ x: `${30 * i + 1}px` }}
      animate={{ x: '0px' }}
      key={link.text}
      className='py-2'
    >
      <Link
        href={`#${link.href}`}
        className={`${
          hash === link.href
            ? 'font-semibold text-emerald-500'
            : 'font-normal text-zinc-600 dark:text-zinc-500'
        } transition-all duration-300 hover:text-emerald-500 dark:hover:text-emerald-300`}
      >
        {link.text}
      </Link>
    </motion.li>
  ));
}

export default MobileNav;
