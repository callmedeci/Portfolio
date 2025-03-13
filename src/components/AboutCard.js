import { motion } from 'motion/react';

function AboutCard({ content: { title, description, translate }, index }) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className='transition-all duration-300 px-10 py-7 rounded-2xl shadow-sm hover:shadow-md flex flex-col gap-3 bg-zinc-200/10 dark:bg-zinc-800/10 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 ring ring-zinc-400 dark:ring-zinc-700/50 shadow-zinc-400 dark:shadow-zinc-950 group'
    >
      <h4 className='text-lg md:text-2xl font-semibold text-zinc-800/60 dark:text-zinc-200/60  group-hover:text-zinc-800/90 dark:group-hover:text-zinc-200 transition-colors duration-300'>
        {title}
      </h4>
      <p className='text-zinc-500 text-sm md:text-base group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300'>
        {description}
      </p>
    </motion.div>
  );
}

export default AboutCard;
