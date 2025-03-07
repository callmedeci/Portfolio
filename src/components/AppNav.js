import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';

const AppLinks = [
  { href: '#about', text: 'About' },
  { href: '#projects', text: 'Projects' },
  { href: '#contact', text: 'Contact' },
];

function AppNav() {
  return (
    <nav className='flex-1 h-14 flex place-self-end items-center gap-5'>
      <ul className='hidden sm:flex gap-10 bg-zinc-800 px-6 py-3 rounded-2xl text-zinc-400 shadow-md'>
        {AppLinks.map((link) => (
          <li
            key={link.text}
            className='hover:text-emerald-500 transition-colors duration-300 font-medium'
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>

      <button className='bg-zinc-800 text-zinc-400 hover:text-emerald-600 p-3 rounded-full transition-all duration-300 cursor-pointer shadow-md'>
        <Moon />
      </button>
    </nav>
  );
}

export default AppNav;
