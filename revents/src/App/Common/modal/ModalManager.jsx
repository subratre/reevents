import React from "react";
import { useSelector } from "react-redux";
import TestModal from "../../../features/sandbox/testModal";
import LoginForm from "../../../features/Auth/LoginForm";

const ModalManager = () => {
  const modalLookup = { TestModal, LoginForm };
  const currentModal = useSelector((state) => state.modals);
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

export default ModalManager;
