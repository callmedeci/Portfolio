import { useHash } from '@/context/HashContext';
import { useWindowWidth } from './useWindowWidth';
import { useEffect, useRef } from 'react';

export function useSectionObserver(initialValue) {
  const ref = useRef(initialValue);
  const { setHash } = useHash();
  const [innerWidth] = useWindowWidth(0);

  const options = {
    root: null,
    rootMargin: innerWidth < 768 ? '0px 0px -50% 0px' : '0px',
    threshold: innerWidth < 768 ? 0.1 : 0.5,
  };

  function callBack(entries) {
    const [entry] = entries;
    const childEl = [...entry.target.children].at(0);

    if (entry.isIntersecting) setHash(childEl.id);
  }

  useEffect(
    function () {
      const obeserver = new IntersectionObserver(callBack, options);

      if (ref.current) obeserver.observe(ref.current);

      return () => {
        if (ref.current) obeserver.unobserve(ref.current);
      };
    },
    [ref]
  );

  return ref;
}
