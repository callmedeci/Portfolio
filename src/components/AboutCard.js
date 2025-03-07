import { cn } from '@/lib/utils';

function AboutCard({ title, description, className }) {
  return (
    <div
      className={cn(
        'text-zinc-300/80 tracking-wide mt-5 bg-zinc-800 p-5 rounded-2xl shadow-md shadow-zinc-800/25',
        className
      )}
    >
      <h4 className='text-lg md:text-2xl font-semibold text-zinc-200/95  after:bg-emerald-600 after:content-[""] after:absolute after:w-26 after:h-0.5 after:left-0 after:-bottom-[0.5px] relative'>
        {title}
      </h4>
      <p>{description}</p>
    </div>
  );
}

export default AboutCard;
