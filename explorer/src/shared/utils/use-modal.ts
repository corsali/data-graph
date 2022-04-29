import { useState } from "react";

export const useModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);
  const [openModal, closeModal, toggleModal] = [
    () => setIsModalOpen(true),
    () => setIsModalOpen(false),
    () => setIsModalOpen(!isModalOpen),
  ];
  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

export type PropsWithModalOpener<
  T extends Record<string, unknown> = Record<string, unknown>,
  ModalOpenerProps extends Record<string, unknown> = {}
> = T & {
  children: React.ComponentType<ModalOpenerProps & { openModal: () => void }>;
};
