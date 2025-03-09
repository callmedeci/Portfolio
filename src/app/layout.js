import { Open_Sans } from 'next/font/google';

import './globals.css';
import AppNav from '@/components/AppNav';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';

const OpenSans = Open_Sans({ display: 'swap', subsets: ['latin'] });

export const metadata = {
  title: 'Yunes',
  description: 'Yunes portfolio',
};

export default function AppLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${OpenSans.className} bg-zinc-950 text-zinc-200 w-full h-dvh`}
      >
        <div className='justify-self-center w-full max-w-7xl bg-zinc-900 relative'>
          <div className='p-8 lg:px-24'>
            <div className='flex items-center justify-between w-full'>
              <Icon />

              <AppNav />
            </div>

            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
