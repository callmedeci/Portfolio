import Image from 'next/image';

function InfinitieScroll() {
  return (
    <div className='infinite-wrapper relative mt-22 h-24 w-full overflow-hidden'>
      <div className='infinite infinite-1 absolute flex items-center justify-center gap-2'>
        <Image src='/svg/react.svg' width={60} height={60} alt='react' />
        <span className='text-3xl font-mono font-medium'>React</span>
      </div>
      <div className='infinite infinite-2 absolute flex items-center justify-center gap-2'>
        <Image src='/svg/nextjs.svg' width={60} height={60} alt='nextJS' />
        <span className='text-3xl font-mono font-medium'>NextJS</span>
      </div>
      <div className='infinite infinite-3 absolute flex items-center justify-center gap-2'>
        <Image src='/svg/tailwind.svg' width={60} height={60} alt='tailwind' />
        <span className='text-3xl font-mono font-medium'>Tailwind</span>
      </div>
      <div className='infinite infinite-4 absolute flex items-center justify-center gap-2'>
        <Image src='/svg/git.svg' width={60} height={60} alt='git' />
        <span className='text-3xl font-mono font-medium'>Git</span>
      </div>
      <div className='infinite infinite-5 absolute flex items-center justify-center gap-2'>
        <Image src='/svg/javascript.svg' width={60} height={60} alt='js' />
        <span className='text-3xl font-mono font-medium'>Javascript</span>
      </div>
    </div>
  );
}

export default InfinitieScroll;
