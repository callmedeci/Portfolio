import { Menu } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Modal from './ui/Modal';
import Button from './ui/Button';

function MobileNav({ links, activeHash }) {
  return (
    <Modal>
      <Modal.Open id='mobileNav'>
        <Button
          variant='toggle'
          className='shadow-zinc-400 dark:shadow-zinc-950 block lg:hidden'
        >
          <Menu className='size-5 md:size-7' />
        </Button>
      </Modal.Open>

      <Modal.Window id='mobileNav' className='m-10'>
        <h4 className='text-zinc-700 dark:text-zinc-400 text-lg font-medium'>
          Navigation
        </h4>
        <motion.ul
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          className='divide-y divide-zinc-300 dark:divide-zinc-700 mt-5'
        >
          {links.map((link, i) => (
            <motion.li
              transition={{ delay: i * 0.002, duration: i * 0.2 }}
              initial={{ x: `${30 * i + 1}px` }}
              animate={{ x: '0px' }}
              key={link.text}
              className='py-2'
            >
              <Link
                href={`#${link.href}`}
                className={`${
                  activeHash === link.href
                    ? 'text-emerald-500 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-500 font-normal'
                } hover:text-emerald-500 dark:hover:text-emerald-300 transition-all duration-300`}
              >
                {link.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Modal.Window>
    </Modal>
  );
}

export default MobileNav;
