import { Send } from 'lucide-react';
import Button from './Button';
import Input from './Input';

import { sendContactMessage } from '@/lib/action';
import { motion } from 'motion/react';
import toast from 'react-hot-toast';

function ContactForm() {
  async function handleSubmit(formData) {
    try {
      await sendContactMessage(formData);

      toast.success('Message successfully sent!');
    } catch (error) {
      toast.error('Failed to sent, please try again');
    }
  }

  return (
    <form action={handleSubmit} className='flex flex-col gap-5 mt-5'>
      <Input id='name' name='name' placeholder='Your name' />
      <Input id='email' name='email' placeholder='Your email' />
      <motion.textarea
        id='message'
        initial={{ opacity: 0, x: 5 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
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
