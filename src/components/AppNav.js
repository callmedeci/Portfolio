import { motion } from 'motion/react';
import Link from 'next/link';

function AppNav({ hash, links }) {
  return (
    <motion.ul className='fixed z-[100] hidden gap-5 rounded-2xl bg-zinc-300 p-1.5 text-zinc-800 shadow-md ring ring-zinc-200 md:left-2/8 md:flex lg:left-1/3 lg:gap-10 xl:left-2/5 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-900'>
      {links.map((link, i) => (
        <motion.li
          initial={{ y: (i + 1) * 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          key={link.text}
          className={`${
            hash === link.href ? 'text-emerald-500' : ''
          } relative flex w-20 justify-center rounded-2xl p-3 font-semibold transition-colors duration-300 hover:text-emerald-500`}
        >
          <Link className='z-30' href={`#${link.href}`}>
            {link.text}
          </Link>

          {hash === link.href && (
            <motion.span
              layout
              layoutId='highLigh'
              className='absolute inset-0 rounded-2xl bg-zinc-200/80 shadow-md shadow-zinc-400 dark:bg-zinc-900/80 dark:shadow-zinc-900'
            ></motion.span>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default AppNav;
