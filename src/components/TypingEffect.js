'use client';

import { delay, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function TypingEffect({ text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h1
      ref={ref}
      className='text-2xl md:text-5xl font-bold text-zinc-100 text-center'
    >
      {text.split('').map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: i * 0.1, duration: 0.2 }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}

export default TypingEffect;
