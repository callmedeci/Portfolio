import { Open_Sans } from 'next/font/google';

import './globals.css';

const OpenSans = Open_Sans({ display: 'swap', subsets: ['latin'] });

export const metadata = {
  title: 'Yunes',
  description: 'Yunes portfolio',
};

export default function AppLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${OpenSans.className} bg-zinc-950 text-zinc-200 w-full h-dvh`}
      >
        <div className='justify-self-center w-full max-w-7xl bg-zinc-900'>
          {children}
        </div>
      </body>
    </html>
  );
}
