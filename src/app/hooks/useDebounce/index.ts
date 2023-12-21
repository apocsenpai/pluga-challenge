import { ChangeEvent, useRef } from 'react';

interface IUseDebounce {
  fn: (e: ChangeEvent<HTMLInputElement>) => void;
  delay: number;
}

export const useDebounce = ({ fn, delay }: IUseDebounce) => {
  const timeoutRef = useRef(0);

  const delayedFunction = (...args: ChangeEvent<HTMLInputElement>[]) => {
    clearTimeout(timeoutRef?.current);
    timeoutRef.current = setTimeout(() => {
      fn(args[0]);
    }, delay);
  };

  return delayedFunction;
};
