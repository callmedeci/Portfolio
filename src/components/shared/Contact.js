'use client';

import { motion } from 'motion/react';

import HashProvider from '@/context/HashContext';
import ContactForm from '../ContactForm';

function Contact() {
  return (
    <HashProvider.Section>
      <div
        id='contact'
        className='my-26 flex min-h-160 w-full flex-col border-t border-zinc-400 py-26 dark:border-zinc-700'
      >
        <motion.div
          initial={{ opacity: 0, y: 65 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='relative text-2xl font-bold text-zinc-800 after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-26 after:bg-emerald-500 after:content-[""] md:text-4xl dark:text-zinc-200'
          >
            Contact me
          </motion.h2>

          <p className='text-lg tracking-wider text-zinc-600 dark:text-zinc-400'>
            Are you interested in working with me?{' '}
            <span className='text-zinc-900 dark:text-zinc-100'>
              Let&apos;s talk!
            </span>
          </p>

          <ContactForm />
        </motion.div>
      </div>
    </HashProvider.Section>
  );
}

export default Contact;
