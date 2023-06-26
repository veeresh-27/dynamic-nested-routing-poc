import React, { useState } from "react";

function Modal({ children, visible }) {
  const [show, setShow] = useState(visible);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <div>
        <h2>Title</h2>
        <button onClic={handleClose}>Close</button>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Modal;
