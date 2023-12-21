import { ModalContext } from '@/app/providers/modalProvider';
import { IApp } from '@/services/app';
import { useContext } from 'react';

export const useToggle = () => {
  const { isActive, setIsActive } = useContext(ModalContext);

  const turnOffElement = () => setIsActive(null);
  const turnOnElement = (app: IApp) => setIsActive(app);

  return {
    isActive,
    turnOffElement,
    turnOnElement,
  };
};
