import { useEffect, useState } from 'react';

export function useHashState(initialValue) {
  const [hash, setHash] = useState(initialValue);

  useEffect(function () {
    setHash(window.location.hash.replace('#', '') || '');
  }, []);

  useEffect(
    function () {
      document.title = `Yunes Maghsoudie - ${hash}`;
    },
    [hash],
  );

  useEffect(
    function () {
      if (hash) history.replaceState(null, null, `#${hash}`);
    },
    [hash],
  );

  return { hash, setHash };
}
