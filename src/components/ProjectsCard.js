import { ChevronRight, Code2 } from 'lucide-react';
import Link from 'next/link';

function ProjectsCard({ date, title, description, liveLink, sourceLink }) {
  return (
    <div className='transition-all duration-300 px-10 py-7 rounded-2xl shadow-sm hover:shadow-md flex flex-col gap-3 bg-zinc-800/10 hover:bg-zinc-800/50 ring ring-zinc-700/50'>
      <time className='text-zinc-500 text-sm font-semibold after:bg-zinc-600 after:content-[""] after:absolute after:rounded-full after:w-0.5 after:h-5 after:-left-[5.5px] after:bottom-0 relative'>
        {date}
      </time>

      <h4 className='text-lg font-medium text-zinc-200/95 tracking-wide'>
        {title}
      </h4>

      <p className='text-sm text-zinc-400 tracking-tight'>{description}</p>

      <div className='flex items-center gap-5'>
        <Link
          href={liveLink}
          className='hover:bg-zinc-800 hover:text-emerald-500 hover:shadow-2xl px-3 py-2 rounded-lg transition-all flex items-center gap-1 text-emerald-400 text-sm xl:text-base'
        >
          <span>Live Preview</span>
          <ChevronRight className='size-4' />
        </Link>
        <Link
          href={sourceLink}
          className='hover:bg-zinc-800 hover:text-emerald-500 hover:shadow-2xl px-3 py-2 rounded-lg transition-all flex items-center gap-1 text-emerald-400 text-sm xl:text-base'
        >
          Source Code
          <Code2 className='size-4' />
        </Link>
      </div>
    </div>
  );
}

export default ProjectsCard;
