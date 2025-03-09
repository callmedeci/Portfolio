'use client';

import { motion } from 'motion/react';

import ContactForm from '../ContactForm';

function Contact() {
  return (
    <section
      id='contact'
      className='w-full flex flex-col border-t border-zinc-700 py-26'
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
          className='text-2xl md:text-4xl text-zinc-200 font-bold after:bg-emerald-500 after:content-[""] after:absolute after:w-26 after:h-0.5 after:left-0 after:bottom-0 relative'
        >
          Contact me
        </motion.h2>

        <p className='text-zinc-400 text-lg tracking-wider'>
          Are you interested in working with me?{' '}
          <span className='text-zinc-100'>Let&apos;s talk!</span>
        </p>

        <ContactForm />
      </motion.div>
    </section>
  );
}

export default Contact;
