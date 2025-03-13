import { useEffect, useState } from 'react';

export function useLocalStorage(initialValue, key) {
  const [value, setValue] = useState(initialValue);

  useEffect(function () {
    setValue((value) => localStorage.getItem(key) || value);
  }, []);

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value]
  );

  return [value, setValue];
}
