'use client';

import { useEffect, useRef } from 'react';

export function useClickOutSide(action) {
  const ref = useRef(null);

  useEffect(function () {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) action();
    }

    document.addEventListener('click', handler, true);

    return () => document.removeEventListener('click', handler, true);
  }, []);

  return ref;
}
