import { motion } from 'motion/react';

function AboutCard({ content: { title, description, translate }, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: (index + 1) * 3, y: (index + 1) * 10 }}
      whileInView={{ opacity: 1, x: translate.x, y: translate.y }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className='transition-all duration-300 px-10 py-7 rounded-2xl shadow-sm hover:shadow-md flex flex-col gap-3 bg-zinc-800/10 hover:bg-zinc-800/50 ring ring-zinc-700/50'
    >
      <h4 className='text-lg md:text-2xl font-semibold text-zinc-200/80'>
        {title}
      </h4>
      <p className='text-zinc-400 text-sm'>{description}</p>
    </motion.div>
  );
}

export default AboutCard;
