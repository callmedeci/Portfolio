import { useEffect, useState } from 'react';

export function useHashState(initialValue) {
  const [hash, setHash] = useState(initialValue);

  useEffect(function () {
    setHash(window.location.hash.replace('#', '') || '');
  }, []);

  useEffect(
    function () {
      document.title = `Yunes/${hash}`;
    },
    [hash]
  );

  useEffect(
    function () {
      history.replaceState(null, null, `#${hash}`);
    },
    [hash]
  );

  return { hash, setHash };
}
