import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  loginModal: boolean;
  setLoginModal: (value: boolean) => void;
  sellModal: boolean;
  setSellModal: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [sellModal, setSellModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ loginModal, setLoginModal, sellModal, setSellModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
