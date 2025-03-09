import { Mail, Send } from 'lucide-react';
import Button from './Button';

function StayUpToDateForm() {
  return (
    <form className='ring ring-zinc-700/50 p-3 sm:p-6 rounded-2xl shadow-sm shadow-zinc-950'>
      <div className='flex gap-1 items-center'>
        <Mail className='text-zinc-400 size-6' />
        <h4 className='text-lg font-semibold text-zinc-200 tracking-wide'>
          Stay up to date
        </h4>
      </div>

      <p className='mt-2 text-sm text-zinc-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
      </p>

      <div className='flex items-center gap-5 mt-4'>
        <input
          className='bg-inherit ring-2 ring-zinc-700/50 w-full rounded-md px-5 py-3 focus:outline-none focus:ring-emerald-500 transition-all shadow-md'
          placeholder='Email address'
        />

        <Button icon={<Send className='size-5' />}>Send</Button>
      </div>
    </form>
  );
}

export default StayUpToDateForm;
