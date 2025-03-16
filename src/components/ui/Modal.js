'use client';

import { useClickOutSide } from '@/hooks/useClickOutSide';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { cloneElement, createContext, use, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const ModalContext = createContext();

function Modal({ children }) {
  const [modalId, setModalId] = useState(null);

  const isOpen = modalId ? true : false;
  const open = setModalId;
  const close = () => setModalId('');

  return (
    <ModalContext.Provider value={{ modalId, open, close, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  const context = use(ModalContext);

  if (!context) throw new Error('Hook used outside the context!');

  return context;
}

function Overlay({ children }) {
  return (
    <div className='fixed top-0 left-0 z-[1000000] h-full w-full backdrop-blur-lg'>
      {children}
    </div>
  );
}

function Open({ children, id }) {
  const { open } = useModalContext();

  return cloneElement(children, { onClick: () => open(id) });
}

function Window({ children, id, className }) {
  const { close, modalId } = useModalContext();
  const ref = useClickOutSide(close);

  if (modalId !== id) return null;

  return createPortal(
    <Overlay>
      <motion.div
        initial={{ opacity: 0, y: '20px' }}
        animate={{ opacity: 1, y: '0px' }}
        ref={ref}
        className={cn(
          'relative z-50 h-max rounded-2xl bg-zinc-200 p-5 shadow-md ring ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-700',
          className,
        )}
      >
        <Button
          onClick={close}
          icon={<XIcon className='size-5' />}
          variant='danger'
          className='absolute top-0 right-0'
        />

        {children}
      </motion.div>
    </Overlay>,
    document.body,
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
