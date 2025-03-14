import { Loader2 } from 'lucide-react';

function Loading() {
  return (
    <div className='flex h-dvh w-full items-center justify-center'>
      <Loader2 className='size-10 animate-spin' />
    </div>
  );
}

export default Loading;
