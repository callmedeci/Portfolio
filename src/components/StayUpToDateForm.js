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
    INITIAL_STATE
  );

  useEffect(
    function () {
      if (formState.status) toast[formState.status](formState.message);
    },
    [formState.status]
  );

  return (
    <form
      action={formAction}
      className='ring ring-zinc-400/50 dark:ring-zinc-700/50 p-3 sm:p-6 rounded-2xl shadow-sm shadow-zinc-400 dark:shadow-zinc-950'
    >
      <div className='flex gap-1 items-center'>
        <Mail className='text-zinc-500 dark:text-zinc-400 size-6' />
        <h4 className='text-lg font-semibold text-zinc-700 dark:text-zinc-200 tracking-wide'>
          Stay up to date
        </h4>
      </div>

      <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      <div className='flex items-center gap-5 mt-4'>
        <FormFiled
          showError={false}
          name='email'
          placeholder='Email address'
          className='w-full h-12'
          defaultValue={formState.data.email}
          error={formState.zodErrors?.fieldErrors.email}
        />

        <SubmitButton pendingLabel='Sending...'>Send</SubmitButton>
      </div>
    </form>
  );
}

export default StayUpToDateForm;
