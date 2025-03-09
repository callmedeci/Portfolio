import { motion } from 'motion/react';

function AboutCard({ content: { title, description, translate }, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, ...translate }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className='transition-all duration-300 px-10 py-7 rounded-2xl shadow-sm hover:shadow-md flex flex-col gap-3 bg-zinc-800/10 hover:bg-zinc-800/50 ring ring-zinc-700/50 shadow-zinc-950 group'
    >
      <h4 className='text-lg md:text-2xl font-semibold text-zinc-200/60 group-hover:text-zinc-200 transition-colors duration-300'>
        {title}
      </h4>
      <p className='text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300'>
        {description}
      </p>
    </motion.div>
  );
}

export default AboutCard;
