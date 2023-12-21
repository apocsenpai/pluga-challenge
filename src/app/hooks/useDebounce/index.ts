import { ChangeEvent, useRef } from 'react';

interface IUseDebounce {
  fn: (e: ChangeEvent<HTMLInputElement>) => void;
  delay: number;
}

export const useDebounce = ({ fn, delay }: IUseDebounce) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const delayedFunction = (...args: ChangeEvent<HTMLInputElement>[]) => {
    if (!timeoutRef?.current) return;

    clearTimeout(timeoutRef?.current);
    timeoutRef.current = setTimeout(() => {
      fn(args[0]);
    }, delay);
  };

  return delayedFunction;
};
