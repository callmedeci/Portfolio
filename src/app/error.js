'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';

function Error({ error, reset }) {
  return (
    <div className='min-h-dvh flex flex-col items-center justify-center gap-5'>
      <h1 className='text-3xl font-semibold text-rose-700 '>
        Oops, Something went wrong!
      </h1>

      <h2 className='text-xl font-semibold text-zinc-700 dark:text-zinc-100'>
        {error.message}
      </h2>

      <div className='flex gap-2'>
        <Button variant='link'>
          <Link href='/'>&larr; Go back to home</Link>
        </Button>
        <Button onClick={reset} variant='link'>
          Try again
        </Button>
      </div>
    </div>
  );
}

export default Error;
