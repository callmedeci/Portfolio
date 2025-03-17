import { motion } from 'motion/react';
import { cloneElement } from 'react';

function AboutCard({ content: { title, description, icon }, index }) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className='group flex flex-col gap-3 rounded-2xl bg-zinc-200/10 px-5 py-7 shadow-sm ring shadow-zinc-400 ring-zinc-400 transition-all duration-300 hover:bg-zinc-200/50 hover:shadow-md md:px-10 dark:bg-zinc-800/10 dark:shadow-zinc-950 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/50'
    >
      <div className='flex w-full items-center gap-1'>
        {cloneElement(icon, {
          className:
            'size-5 md:size-7 text-zinc-800/60 transition-colors duration-300 group-hover:text-zinc-800/90 dark:text-zinc-200/60 dark:group-hover:text-zinc-200',
        })}
        <h4 className='text-base font-semibold text-zinc-800/60 transition-colors duration-300 group-hover:text-zinc-800/90 sm:text-lg lg:text-xl xl:text-2xl dark:text-zinc-200/60 dark:group-hover:text-zinc-200'>
          {title}
        </h4>
      </div>

      <p className='text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-600 md:text-base dark:group-hover:text-zinc-300'>
        {description}
      </p>
    </motion.div>
  );
}

export default AboutCard;
