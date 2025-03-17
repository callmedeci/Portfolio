'use client';

import { useActionState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import toast from 'react-hot-toast';

import { sendEmailAddress } from '@/lib/action';
import SubmitButton from './SubmitButton';
import FormFiled from './ui/FormFiled';

const INITIAL_STATE = {
  zodErrors: null,
  data: {},
  status: null,
  message: '',
};

function StayUpToDateForm() {
  const [formState, formAction] = useActionState(
    sendEmailAddress,
    INITIAL_STATE,
  );

  useEffect(
    function () {
      if (formState.status) toast[formState.status](formState.message);
    },
    [formState.status],
  );

  return (
    <form
      action={formAction}
      className='rounded-2xl p-3 shadow-sm ring shadow-zinc-400 ring-zinc-400/50 sm:p-6 dark:shadow-zinc-950 dark:ring-zinc-700/50'
    >
      <div className='flex items-center gap-1'>
        <Mail className='size-6 text-zinc-500 dark:text-zinc-400' />
        <h4 className='text-lg font-semibold tracking-wide text-zinc-700 dark:text-zinc-200'>
          Stay up to date
        </h4>
      </div>

      <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      <div className='mt-4 flex items-center gap-5'>
        <FormFiled
          showError={false}
          name='email'
          placeholder='Email address'
          className='h-12 w-full'
          defaultValue={formState.data.email}
          error={formState.zodErrors?.fieldErrors.email}
        />

        <SubmitButton pendingLabel='Sending...'>Send</SubmitButton>
      </div>
    </form>
  );
}

export default StayUpToDateForm;
