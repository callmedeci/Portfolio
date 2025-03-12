'use client';

import { useHashState } from '@/hooks/useHashState';
import { useSectionObserver } from '@/hooks/useSectionObserver';
import { createContext, use } from 'react';

const HashContext = createContext();

function HashProvider({ children }) {
  const { hash, setHash } = useHashState('');

  return <HashContext value={{ hash, setHash }}>{children}</HashContext>;
}

export function useHash() {
  const context = use(HashContext);

  if (!context) throw new Error('Hook used outside the provider');

  return context;
}

function Section({ children }) {
  const ref = useSectionObserver(null);

  return <section ref={ref}>{children}</section>;
}

HashProvider.Section = Section;

export default HashProvider;
