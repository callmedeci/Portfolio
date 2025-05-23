'use client';

import HashProvider from '@/context/HashContext';
import { motion } from 'motion/react';
import SocialLinks from '../SocialLinks';
import TypingEffect from '../ui/TypingEffect';

function Header() {
  return (
    <HashProvider.Section>
      <header
        id='intro'
        className='mx-auto mt-24 flex min-h-140 max-w-2xl flex-col items-center justify-center gap-6 text-center'
      >
        <TypingEffect text='Yunes Maghsoudie JavaScript junkie, React enthusiast, and coffee addict.' />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04, duration: 0.5 }}
          className='tracking-wide text-zinc-600 dark:text-zinc-400'
        >
          I&apos;m Yunes, a web developer based in Shiraz. That one guy
          who&apos;s always trying out different technologies, exploring
          everywhere to find something new that fits within my toolbox :D
        </motion.p>

        <SocialLinks />
      </header>
    </HashProvider.Section>
  );
}

export default Header;
