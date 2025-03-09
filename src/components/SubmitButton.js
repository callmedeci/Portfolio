'use client';

import { LoaderCircle, Send } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import Button from './ui/Button';
import { cn } from '@/lib/utils';

function SubmitButton({ children, pendingLabel, className }) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={className}
      icon={
        pending ? (
          <LoaderCircle className='size-5 animate-spin' />
        ) : (
          <Send className='size-5' />
        )
      }
    >
      {pending ? pendingLabel : children}
    </Button>
  );
}

export default SubmitButton;
