import React from "react";
import Modal from "react-modal";

function ErrorModal({ error, setError, msg }) {
  return (
    <Modal isOpen={error} className="error-modal">
      <div className="modal-wrap">
        <h1 className="modal-msg">{msg}</h1>
        <button onClick={() => setError(false)} className="modal-btn">
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ErrorModal;
