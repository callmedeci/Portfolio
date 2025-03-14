import { Open_Sans } from 'next/font/google';

import Footer from '@/components/Footer';

import { CircleCheck, CircleX } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

import MainNav from '@/components/MainNav';
import DarkModeProvider from '@/context/DarkModeContext';
import HashProvider from '@/context/HashContext';
import './globals.css';

const OpenSans = Open_Sans({ display: 'swap', subsets: ['latin'] });

export const metadata = {
  title: {
    template: 'Yunes Yunes Maghsoudie - %s',
    default: 'Yunes Maghsoudie - intro',
  },
  description: 'Yunes portfolio',
  authors: [{ name: 'Yunes Maghsoudie' }],
};

export default function AppLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${OpenSans.className} h-dvh w-full bg-zinc-100 text-zinc-200 dark:bg-zinc-950`}
      >
        <div className='relative mx-auto w-full max-w-7xl bg-zinc-200 dark:bg-zinc-900'>
          <div className='p-8 lg:px-18 lg:py-12'>
            <HashProvider>
              <DarkModeProvider>
                <MainNav />

                <Toaster
                  reverseOrder={false}
                  position='top-right'
                  toastOptions={{
                    style: {
                      backgroundColor: 'var(--color-zinc-800)',
                      color: 'var(--color-zinc-200)',
                    },
                    success: {
                      icon: <CircleCheck className='size-7 text-green-500' />,
                    },
                    error: {
                      icon: <CircleX className='size-7 text-red-500' />,
                    },
                  }}
                />
                {children}
              </DarkModeProvider>
            </HashProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
