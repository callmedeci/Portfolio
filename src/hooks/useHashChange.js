'use client';

import { useEffect, useState } from 'react';

export function useHashChange(value) {
  const [hash, setHash] = useState(value);

  useEffect(function () {
    setHash(window.location.hash || value);

    function handler() {
      setHash(window.location.hash || value);
    }

    window.addEventListener('hashchange', handler);

    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return [hash, setHash];
}
