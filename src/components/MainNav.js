'use client';

import { useHash } from '@/context/HashContext';
import { usePathname } from 'next/navigation';
import AppNav from './AppNav';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';
import Icon from './ui/Icon';
import Link from 'next/link';
import Button from './ui/Button';
import { ArrowLeft } from 'lucide-react';

const links = [
  { href: 'intro', text: 'Intro' },
  { href: 'projects', text: 'Projects' },
  { href: 'about', text: 'About' },
  { href: 'contact', text: 'Contact' },
];

function MainNav() {
  const { hash } = useHash();
  const pathname = usePathname();

  return (
    <nav className='relative flex h-14 flex-1 items-center justify-between'>
      <Icon />

      {pathname === '/' && <AppNav links={links} hash={hash} />}

      <div className='fixed right-5 z-10 flex items-center gap-1 md:relative md:gap-3'>
        {pathname === '/' ? (
          <MobileNav activeHash={hash} links={links} />
        ) : (
          <Link href='/' className='hidden md:flex'>
            <Button icon={<ArrowLeft />}>Go back home</Button>
          </Link>
        )}

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default MainNav;
