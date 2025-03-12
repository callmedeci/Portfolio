import { useEffect, useState } from 'react';

export function useWindowWidth(initialValue) {
  const [innerWidth, setInnerWidth] = useState(initialValue);

  useEffect(function () {
    function handler() {
      setInnerWidth(window.innerWidth);
    }

    setInnerWidth(window.innerWidth);

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  return [innerWidth, setInnerWidth];
}
