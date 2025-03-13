import Button from '@/components/ui/Button';
import Link from 'next/link';

async function NotFound() {
  return (
    <div className='min-h-dvh flex flex-col items-center justify-center text-zinc-800 dark:text-zinc-100 gap-5'>
      <h1 className='text-3xl font-semibold'>Not found 404</h1>
      <Button variant='link'>
        <Link href='/' className=''>
          &larr; Go back to home
        </Link>
      </Button>
    </div>
  );
}

export default NotFound;
