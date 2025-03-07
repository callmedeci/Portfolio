import { cn } from '@/lib/utils';

function AboutCard({ title, description, className }) {
  return (
    <div
      className={cn(
        'transition-all duration-300 px-10 py-7 rounded-2xl shadow-sm hover:shadow-md flex flex-col gap-3 bg-zinc-800/10 hover:bg-zinc-800/50 ring ring-zinc-700/50',
        className
      )}
    >
      <h4 className='text-lg md:text-2xl font-semibold text-zinc-200/80'>
        {title}
      </h4>
      <p className='text-zinc-400 text-sm'>{description}</p>
    </div>
  );
}

export default AboutCard;
