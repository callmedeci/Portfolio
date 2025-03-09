import { Moon } from 'lucide-react';
import Button from './Button';

function ThemeToggle() {
  return (
    <Button variant='toggle' className='shadow-zinc-950'>
      <Moon className='size-5 sm:size-8' />
    </Button>
  );
}

export default ThemeToggle;
