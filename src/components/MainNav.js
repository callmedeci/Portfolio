'use client';

import { DoorOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppNav from './AppNav';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';
import Button from './ui/Button';
import Icon from './ui/Icon';

const links = [
  { href: 'intro', text: 'Intro' },
  { href: 'projects', text: 'Projects' },
  { href: 'about', text: 'About' },
  { href: 'contact', text: 'Contact' },
];

function MainNav() {
  const pathname = usePathname();

  return (
    <nav className='relative flex h-14 flex-1 items-center justify-between'>
      <Icon />

      {pathname === '/' && <AppNav links={links} />}

      <div
        className={`${pathname === '/' ? 'fixed' : ''} right-5 z-[1000000] flex items-center gap-1 md:relative md:gap-3`}
      >
        {pathname === '/' ? (
          <MobileNav links={links} />
        ) : (
          <Link href={`${pathname === '/projects' ? '/' : '/projects'}`}>
            <Button
              icon={<DoorOpen className='size-7' />}
              className='size-11 rounded-full shadow-zinc-400 md:size-13 dark:shadow-zinc-950'
            />
          </Link>
        )}

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default MainNav;
