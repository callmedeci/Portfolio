import { Loader2 } from 'lucide-react';

function Loading() {
  return (
    <div className='h-dvh w-full flex items-center justify-center'>
      <Loader2 className='size-10 animate-spin' />
    </div>
  );
}

export default Loading;
