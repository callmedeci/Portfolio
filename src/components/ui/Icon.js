import Image from 'next/image';
import Avatar from './Avatar';
import Link from 'next/link';

function Icon() {
  return (
    <div className='relative flex items-center gap-2'>
      <Link href='/'>
        <Avatar>
          <Image src='/images/me.jpg' fill alt='Yunes picture' />
        </Avatar>
      </Link>
    </div>
  );
}

export default Icon;
