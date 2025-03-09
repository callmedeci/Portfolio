'use client';

import SocialLinks from '../SocialLinks';
import { motion } from 'motion/react';
import TypingEffect from '../TypingEffect';

function Header() {
  return (
    <header
      id='intro'
      className='flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto text-center mt-12'
    >
      <TypingEffect text='Software designer, founder, and amateur astronaut.' />

      <motion.p
        initial={{ opacity: 0, y: 20, color: 'var(--color-zinc-900)' }}
        animate={{ opacity: 1, y: 0, color: 'var(--color-zinc-400)' }}
        transition={{ delay: 0.04, duration: 0.5 }}
        className='text-zinc-400 tracking-wide'
      >
        I’m Yunes, a software designer and entrepreneur based in New York City.
        I’m the founder and CEO of Planetaria, where we develop technologies
        that empower regular people to explore space on their own terms.
      </motion.p>

      <SocialLinks />
    </header>
  );
}

export default Header;
