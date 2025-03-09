import { sendEmailAddress } from '@/lib/action';
import { Mail } from 'lucide-react';
import { useActionState } from 'react';
import SubmitButton from './SubmitButton';
import FormFiled from './ui/FormFiled';
import toast from 'react-hot-toast';

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

  function handleSubmit(prevState, formData) {
    formAction(prevState, formData);

    toast?.[formState?.status](formState?.message);
  }

  return (
    <form
      action={(prevState, formData) => handleSubmit(prevState, formData)}
      className='ring ring-zinc-700/50 p-3 sm:p-6 rounded-2xl shadow-sm shadow-zinc-950'
    >
      <div className='flex gap-1 items-center'>
        <Mail className='text-zinc-400 size-6' />
        <h4 className='text-lg font-semibold text-zinc-200 tracking-wide'>
          Stay up to date
        </h4>
      </div>

      <p className='mt-2 text-sm text-zinc-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
      </p>

      <div className='flex items-center gap-5 mt-4 h-24'>
        <FormFiled
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
