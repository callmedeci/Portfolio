'use client';

import { sendContactMessage } from '@/lib/action';
import { motion } from 'motion/react';
import { useActionState } from 'react';
import SubmitButton from './SubmitButton';
import FormFiled from './ui/FormFiled';
import toast from 'react-hot-toast';

const INITIAL_STATE = {
  zodErrors: null,
  data: {
    name: '',
    email: '',
    message: '',
  },
  stauts: null,
  message: '',
};

function ContactForm() {
  const [formState, formAction] = useActionState(
    sendContactMessage,
    INITIAL_STATE
  );

  function handleSubmit(prevState, formData) {
    formAction(prevState, formData);

    if (formState?.status || formState?.message)
      toast[formState.status](formState.message);
  }

  return (
    <form
      action={(prevState, formData) => handleSubmit(prevState, formData)}
      className='flex flex-col gap-5 mt-5'
    >
      <FormFiled
        defaultValue={formState.data.name}
        error={formState.zodErrors?.fieldErrors?.name}
        name='name'
        placeholder='Your name'
      />

      <FormFiled
        defaultValue={formState.data.email}
        error={formState.zodErrors?.fieldErrors?.email}
        name='email'
        placeholder='Your email'
      />

      <div className='flex flex-col gap-2'>
        <motion.textarea
          id='message'
          initial={{ opacity: 0, x: 5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          name='message'
          placeholder='Your Message'
          defaultValue={formState.data.message}
          className='bg-inherit ring-2 ring-zinc-700/50 rounded-md px-5 py-3 focus:outline-none focus:ring-emerald-500 transition-all shadow-md w-full h-36'
        />
        {formState.zodErrors?.fieldErrors?.message && (
          <span className='text-sm tracking-wide font-bold text-rose-700 ml-2'>
            {formState.zodErrors.fieldErrors.message}
          </span>
        )}
      </div>

      <SubmitButton className='w-max self-end' pendingLabel='Sending....'>
        Send Message
      </SubmitButton>
    </form>
  );
}

export default ContactForm;
