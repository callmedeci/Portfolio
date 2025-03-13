import { cn } from '@/lib/utils';
import Input from './Input';

function FormFiled({
  name,
  error,
  placeholder,
  defaultValue,
  className,
  showError = true,
  ...props
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Input
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${
          error
            ? 'ring-rose-700 dark:ring-rose-700 placeholder:text-rose-500'
            : ''
        }`}
        {...props}
      />
      {error && showError && (
        <span className='text-xs md:text-sm tracking-tighter md:tracking-wide font-bold text-rose-700 ml-2'>
          {error}
        </span>
      )}
    </div>
  );
}

export default FormFiled;
