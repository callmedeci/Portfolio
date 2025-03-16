'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NotFound() {
  const pathname = usePathname();
  const repoName = pathname.split('/').at(-1);

  return (
    <div className='flex h-dvh flex-col items-center justify-center gap-2 text-zinc-800 dark:text-zinc-100'>
      <h1 className='text-4xl font-bold tracking-wide'>404</h1>
      <h3 className='text-2xl font-semibold uppercase'>
        Project {repoName} not found
      </h3>
      <Link href='/'>
        <Button variant='link'>Take me Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
