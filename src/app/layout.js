import { Open_Sans } from 'next/font/google';

import AppNav from '@/components/AppNav';
import Footer from '@/components/Footer';

import './globals.css';

const OpenSans = Open_Sans({ display: 'swap', subsets: ['latin'] });

export const metadata = {
  title: 'Yunes',
  description: 'Yunes portfolio',
  authors: [{ name: 'Yunes' }],
};

export default function AppLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${OpenSans.className} bg-zinc-950 text-zinc-200 w-full h-dvh`}
      >
        <div className='justify-self-center w-full max-w-7xl bg-zinc-900 relative'>
          <div className='p-8 lg:py-12 lg:px-18'>
            <AppNav />

            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
