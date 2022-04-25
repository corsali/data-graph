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
  S extends unknown = void
> = T & {
  children: React.ComponentType<{ openModal: (props: S) => void }>;
};
