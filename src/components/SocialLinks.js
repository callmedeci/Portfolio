import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

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
    <motion.span
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: index * 0.03,
        duration: 0.2,
      }}
    >
      <Link
        href={href}
        className='group flex h-full w-full items-center overflow-hidden rounded-full bg-zinc-200 p-2 text-zinc-700 shadow-md shadow-zinc-300 transition-all duration-300 hover:text-emerald-500 dark:bg-zinc-800 dark:text-zinc-300 dark:shadow-zinc-950'
      >
        <span className='scale-95 transition-all duration-300 group-hover:scale-100 group-hover:rotate-12'>
          {icon}
        </span>
      </Link>
    </motion.span>
  );
}

export default SocialLinks;
