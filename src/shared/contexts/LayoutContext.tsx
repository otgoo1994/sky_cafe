/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const LoaderContext = createContext({
  isWriteModalIsOpen: false,
  setIsWriteModalIsOpen: (loading: boolean) => {},
});

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isWriteModalIsOpen, setIsWriteModalIsOpen] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        isWriteModalIsOpen,
        setIsWriteModalIsOpen,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLayout = () => useContext(LoaderContext);
