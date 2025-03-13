import { Open_Sans } from 'next/font/google';

import AppNav from '@/components/AppNav';
import Footer from '@/components/Footer';

import { CircleCheck, CircleX } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

import DarkModeProvider from '@/context/DarkModeContext';
import HashProvider from '@/context/HashContext';
import './globals.css';

const OpenSans = Open_Sans({ display: 'swap', subsets: ['latin'] });

export const metadata = {
  title: {
    template: 'Yunes/%s',
    default: 'Yunes/intro',
  },
  description: 'Yunes portfolio',
  authors: [{ name: 'Yunes' }],
};

export default function AppLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${OpenSans.className} bg-zinc-100 dark:bg-zinc-950 text-zinc-200 w-full h-dvh`}
      >
        <div className='mx-auto w-full max-w-7xl bg-zinc-200 dark:bg-zinc-900 relative'>
          <div className='p-8 lg:py-12 lg:px-18'>
            <HashProvider>
              <DarkModeProvider>
                <AppNav />

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
