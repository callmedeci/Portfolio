import { useDarkMode } from '@/context/DarkModeContext';
import { motion } from 'motion/react';
import Button from './ui/Button';

const raysVariant = {
  hidden: {
    strokeOpacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    strokeOpacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rayVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      pathLength: { duration: 0.3 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 },
    },
  },
};

function ThemeToggle() {
  const { isDark, toggleDark } = useDarkMode();

  const sunsPath =
    'M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z';

  const moonsPath =
    'M24 32C28.4183 32 32 28.4183 32 24C25.3839 26.9877 19.9329 25.4984 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z';

  return (
    <Button
      onClick={toggleDark}
      variant='toggle'
      className='shadow-zinc-400 dark:shadow-zinc-950 size-11 md:size-13 flex items-center justify-center'
    >
      <motion.svg
        className='size-8 md:size-12'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={{ strokeOpacity: 0, fillOpacity: 0 }}
          animate={
            isDark
              ? {
                  stroke: 'var(--color-blue-400)',
                  fill: 'var(--color-blue-400)',
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                  rotate: 360,
                  scale: 2,
                  d: moonsPath,
                }
              : {
                  stroke: 'var(--color-yellow-600)',
                  fill: 'var(--color-yellow-600)',
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                  rotate: 0,
                  d: sunsPath,
                }
          }
          d={sunsPath}
        />

        <motion.g
          variants={raysVariant}
          initial='hidden'
          animate={isDark ? 'hidden' : 'visible'}
          className='stroke-3 stroke-yellow-600'
        >
          <motion.path variants={rayVariant} d='M24 40V44' />
          <motion.path variants={rayVariant} d='M35.32 35.32L38.14 38.14' />
          <motion.path variants={rayVariant} d='M40 24H44' />
          <motion.path variants={rayVariant} d='M38.14 9.86L35.32 12.68' />
          <motion.path variants={rayVariant} d='M24 4V8' />
          <motion.path variants={rayVariant} d='M9.86 9.86L12.68 12.68' />
          <motion.path variants={rayVariant} d='M4 24H8' />
          <motion.path variants={rayVariant} d='M12.68 35.32L9.86 38.14' />
        </motion.g>
      </motion.svg>
    </Button>
  );
}

export default ThemeToggle;
