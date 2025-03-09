import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useHashChange() {
  const pathname = usePathname();
  const [hash, setHash] = useState('#intro');

  useEffect(
    function () {
      setHash(window.location.hash);

      function handler() {
        console.log('ok');
        setHash(window.location.hash);
      }

      window.addEventListener('hashchange', handler);

      return () => window.removeEventListener('hashchange', handler);
    },
    [pathname]
  );

  return [hash, setHash];
}
