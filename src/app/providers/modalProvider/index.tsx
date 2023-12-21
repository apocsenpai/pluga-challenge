import { IApp } from "@/services/app";
import React, { useMemo, useState } from "react";

interface IModalContext{
  isActive: IApp | null ;
  setIsActive: React.Dispatch<React.SetStateAction<IApp | null>>;
}

export const ModalContext = React.createContext<IModalContext>({
    isActive: null,
    setIsActive: () => null
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState<IApp | null>(null);

  const contextValue = useMemo(
    () => ({ isActive, setIsActive }),
    [isActive, setIsActive],
  );

  return (
    <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
  );
};
