import React, { createContext, useState } from "react";

interface ModalContextProps {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const ModalContext = createContext<ModalContextProps>({
  modalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

const ModalProvider = ({ children }: ProviderProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
