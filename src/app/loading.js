import Spinner from '@/components/ui/Spinner';

function Loading() {
  return (
    <div className='flex h-dvh w-full items-center justify-center'>
      <Spinner />
    </div>
  );
}

export default Loading;
