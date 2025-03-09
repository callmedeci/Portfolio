'use client';

import Image from 'next/image';
import Avatar from './Avatar';

function Icon() {
  return (
    <div className='flex items-center gap-2 transform-3d'>
      <Avatar>
        <Image src='/images/me.jpg' fill alt='Yunes picture' />
      </Avatar>

      <h2 className='text-lg font-medium text-zinc-200 cursor-pointer group after:bg-zinc-500 hover:after:bg-emerald-500 after:content-[""] after:absolute after:w-8 hover:after:w-12 after:h-[2px] after:left-0 after:bottom-[2px] relative transition-colors duration-300 hidden md:block'>
        <span>Y</span>
        <span className='absolute invisible opacity-0 group-hover:relative group-hover:visible group-hover:opacity-100 transition-all duration-300'>
          unes
        </span>
        .<span>M</span>
        <span className='absolute invisible opacity-0 group-hover:relative group-hover:visible group-hover:opacity-100 transition-all duration-300'>
          aghssoudie
        </span>
      </h2>

      <h2 className='text-lg font-medium text-zinc-200 after:bg-emerald-500 after:content-[""] after:absolute after:w-8 after:h-[2px] after:left-0 after:bottom-[2px] relative transition-colors duration-300 block md:hidden'>
        <span>Yunes</span>
      </h2>
    </div>
  );
}

export default Icon;
