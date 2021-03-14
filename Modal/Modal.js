import { useState } from "react";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-label_1 modal-label">
          Month
          <div className="modal-label-inner_1 modal-label-inner"></div>
        </div>
        <div className="modal-label_2 modal-label">
          Day
          <div className="modal-label-inner_2 modal-label-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
