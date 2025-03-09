import { ChevronRight, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

import Link from 'next/link';
import Button from './Button';

function ProjectsCard({
  project: { date, title, description, liveLink, sourceLink },
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: (index + 1) * 5, y: (index + 1) * 5 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='transition-all duration-300 px-5 sm:px-10 py-7 rounded-2xl shadow-sm hover:shadow-md flex flex-col gap-3 bg-zinc-800/10 hover:bg-zinc-800/50 ring ring-zinc-700/50 shadow-zinc-950'
    >
      <time className='text-zinc-500 text-sm font-semibold after:bg-zinc-600 after:content-[""] after:absolute after:rounded-full after:w-0.5 after:h-5 after:-left-[5.5px] after:bottom-0 relative'>
        {date}
      </time>

      <h4 className='text-lg font-medium text-zinc-200/95 tracking-wide'>
        {title}
      </h4>

      <p className='text-sm text-zinc-400 tracking-tight'>{description}</p>

      <div className='flex flex-col sm:flex-row items-center gap-2'>
        <Link href={liveLink} className='w-full'>
          <Button
            icon={
              <ChevronRight className='size-4 group-hover:size-5 transition-all' />
            }
            variant='link'
            className='w-full'
          >
            <span>Live Preview</span>
          </Button>
        </Link>

        <Link href={sourceLink} className='w-full'>
          <Button
            icon={
              <Code2 className='size-4 group-hover:size-5 transition-all' />
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
