import { cn } from '@/lib/utils';
import Input from './Input';

function FormFiled({ name, error, placeholder, className, ...props }) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Input name={name} placeholder={placeholder} {...props} />
      {error && (
        <span className='text-sm tracking-wide font-bold text-rose-700 ml-2'>
          {error}
        </span>
      )}
    </div>
  );
}

export default FormFiled;
