import { Mail } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const links = [
  {
    icon: <FaGithub className='size-6.5' />,
    href: 'https://github.com/callmedeci',
  },
  {
    icon: <FaLinkedin className='size-6.5' />,
    href: 'https://www.linkedin.com/in/yunes-maghsoudie',
  },
  {
    icon: <FaTelegram className='size-6.5' />,
    href: 'https://t.me/YuooYi',
  },
  {
    icon: <Mail className='size-6.5' />,
    href: 'mailto:callmedecim@gmail.com',
  },
];

function SocialLinks() {
  return (
    <div className='flex gap-3'>
      {links.map((link) => (
        <LinkItem key={link.href} icon={link.icon} href={link.href} />
      ))}
    </div>
  );
}

function LinkItem({ icon, href }) {
  return (
    <Link
      href={href}
      className='text-zinc-300 hover:text-zinc-50 transition-colors duration-300 bg-zinc-800 p-2 rounded-full shadow'
    >
      {icon}
    </Link>
  );
}

export default SocialLinks;
