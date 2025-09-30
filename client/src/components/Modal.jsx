import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const Modal = ({ isOpen, content, onClose }) => {
  useEffect(() => {
    const modalElement = document.querySelector("#modal");

    if (isOpen) {
      disableBodyScroll(modalElement, { reserveScrollBarGap: true });
    } 

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      id="modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-50 py-10 overflow-scroll scrollbar-hide "
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-[2rem] shadow-lg  p-10 outline-none mt-5"
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
