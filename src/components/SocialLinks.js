'use client';

import { Mail } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { motion } from 'motion/react';

const links = [
  {
    icon: <FaGithub className='size-7' />,
    href: 'https://github.com/callmedeci',
  },
  {
    icon: <FaLinkedin className='size-7' />,
    href: 'https://www.linkedin.com/in/yunes-maghsoudie',
  },
  {
    icon: <FaTelegram className='size-7' />,
    href: 'https://t.me/YuooYi',
  },
  {
    icon: <Mail className='size-7' />,
    href: 'mailto:callmedecim@gmail.com',
  },
];

function SocialLinks() {
  return (
    <div className='flex gap-3'>
      {links.map((link, i) => (
        <LinkItem key={link.href} icon={link.icon} href={link.href} index={i} />
      ))}
    </div>
  );
}

function LinkItem({ icon, href, index }) {
  return (
    <Link
      href={href}
      className='text-zinc-300 hover:text-emerald-500 transition-all duration-300 bg-zinc-800 p-2 rounded-full shadow overflow-hidden group'
    >
      <motion.div
        className='group-hover:rotate-12 group-hover:scale-100 duration-300 transition-all scale-95'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: index * 0.1,
          duration: 0.2,
        }}
      >
        {icon}
      </motion.div>
    </Link>
  );
}

export default SocialLinks;
