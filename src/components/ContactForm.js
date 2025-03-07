import { Send } from 'lucide-react';
import Button from './Button';
import Input from './Input';

function ContactForm() {
  return (
    <form className='flex flex-col gap-5 mt-5'>
      <Input name='name' placeholder='Your name' />
      <Input name='email' placeholder='Your email' />
      <textarea
        name='message'
        placeholder='Your Message'
        className='bg-inherit ring-2 ring-zinc-700/50 rounded-md px-5 py-3 focus:outline-none focus:ring-emerald-500 transition-all shadow-md w-full h-36'
      />

      <Button icon={<Send className='size-5' />} className='w-max self-end'>
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
