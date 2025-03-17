import { ChevronRight, Code2, Radio } from 'lucide-react';
import { motion } from 'motion/react';

import Link from 'next/link';
import Button from './ui/Button';
import { format } from 'date-fns';

function ProjectsCard({ project, index }) {
  const { created_at, name, description, homepage, html_url } = project;

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='group relative flex flex-col gap-3 rounded-2xl bg-zinc-200/10 px-5 py-7 shadow-sm ring shadow-zinc-300 ring-zinc-400/50 transition-all duration-300 hover:bg-zinc-200/50 hover:shadow-md sm:px-10 dark:bg-zinc-800/10 dark:shadow-zinc-950 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/50'
    >
      <Link
        href={`projects/${name}`}
        className='absolute top-0 left-0 z-30 h-full w-full'
      />
      <time className='relative text-sm font-semibold text-zinc-500 after:absolute after:bottom-0 after:-left-[5.5px] after:h-5 after:w-0.5 after:rounded-full after:bg-zinc-400 after:content-[""] dark:after:bg-zinc-600'>
        {format(new Date(created_at), 'd MMMM yyyy')}
      </time>

      <h4 className='text-lg font-medium tracking-wide text-zinc-800/80 capitalize transition-colors group-hover:text-zinc-800 dark:text-zinc-200/80 dark:group-hover:text-zinc-200'>
        {name.replaceAll('-', ' ')}
      </h4>

      <p className='h-24 text-sm tracking-tight text-zinc-600 transition-colors group-hover:text-zinc-700 dark:text-zinc-400 group-hover:dark:text-zinc-300'>
        {description.split('').slice(0, 200).join('')}...
      </p>

      <div className='z-50 flex flex-col items-center gap-2 sm:flex-row'>
        <Link target='_blank' href={homepage} className='w-full'>
          <Button
            icon={
              <Radio className='size-4 transition-all group-hover:size-5' />
            }
            variant='link'
            className='w-full'
          >
            <span>Live Preview</span>
          </Button>
        </Link>

        <Link target='_blank' href={html_url} className='w-full'>
          <Button
            icon={
              <Code2 className='size-4 transition-all group-hover:size-5' />
            }
            variant='link'
            className='w-full'
          >
            Source Code
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectsCard;
