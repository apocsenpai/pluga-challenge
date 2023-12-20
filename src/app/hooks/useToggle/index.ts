import { useState } from 'react';

export const useToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const turnOffElement = () => setIsActive(false);
  const turnOnElement = () => setIsActive(true);

  return {
    isActive,
    turnOffElement,
    turnOnElement,
  };
};
