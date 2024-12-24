import React from "react";
interface ModalProps {
  setModalOpen: (open: boolean) => void;
  modalOpen: boolean;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ modalOpen, children, setModalOpen }) => {

  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={(e) => setModalOpen(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
